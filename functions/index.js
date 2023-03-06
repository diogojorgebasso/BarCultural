/* Only allowed import in this ECMA style due to */

// functions modules
import functions from "firebase-functions";
import admin from "firebase-admin";

// ticket module
import Printer from "pdfmake";
import fonts from "pdfmake/build/vfs_fonts.js";


// email module
import path from "path";
import sgMail from "@sendgrid/mail";

admin.initializeApp();

// firebase modules
const db = admin.firestore();
const bucket = admin.storage().bucket();

// trigger based on Stripe finished payment
export const gerarIngresso = functions.firestore
    .document("ingresso/{docId}") /* fix the path to the actual buy location */
    .onUpdate((snap, context) => {
      const value = snap.after.data();
      console.log(value);
      const name = value.name;
      const party = value.party;
      const uid = context.params.docId;
      const cpf = value.cpf;

      const fontDescriptors = {
        Roboto: {
          normal: Buffer.from(fonts.pdfMake.vfs["Roboto-Regular.ttf"],
              "base64"),
          bold: Buffer.from(fonts.pdfMake.vfs["Roboto-Medium.ttf"],
              "base64"),
          italics: Buffer.from(fonts.pdfMake.vfs["Roboto-Italic.ttf"],
              "base64"),
          bolditalics: Buffer.from(fonts.pdfMake.vfs["Roboto-Italic.ttf"],
              "base64"),
        },
      };

      const printer = new Printer(fontDescriptors);

      const chunks = [];

      const docDefinition = {
        content: [
          {
            alignment: "justify",
            columns: [
              {
                stack: [
                  {
                    image: "https://firebasestorage.googleapis.com/v0/b/bar-cultural-unifei.appspot.com/o/barCultural.png?alt=media&token=9868db08-a5c1-419d-a387-43774ebc34ee",
                    fit: [100, 100],
                  },
                  {
                    qr: uid,
                  },
                ],
                width: 100,
                margin: [0, 0, 0, 10],
              },
              {
                stack: [
                  {
                    text: [
                      "Bar Cultural\n",
                      {
                        text: "A sua casa noturna",
                        style: "subtitle",
                      },
                    ],
                    style: "header",
                    marginBottom: 35,
                  },
                  {
                    text: name,
                    marginBottom: 5,
                  },
                  {
                    text: `CPF: ${cpf}`,
                    marginBottom: 5,
                  },
                  {
                    text: party,
                    marginBottom: 5,
                  },
                  `Expedido dia ${new Date().getDate()}
                /${new Date().getMonth()}
                /${new Date().getFullYear()}`,
                ],
                margin: [0, 20],
                width: 150,
              },
              {
                stack: [
                  {
                    text: "Patrocinadores",
                    style: "header",
                  },
                  {
                    image: "https://firebasestorage.googleapis.com/v0/b/bar-cultural-unifei.appspot.com/o/WhatsApp%20Image%202023-02-28%20at%2017.47.04.jpeg?alt=media&token=0b034559-c653-4340-997a-1fff510a4e9d",
                    fit: [100, 100],
                    margin: [0, -10],
                  },
                  {
                    image: "https://firebasestorage.googleapis.com/v0/b/bar-cultural-unifei.appspot.com/o/logo_radio_max-min.png?alt=media&token=8512e83f-65b2-4c22-bb53-6aedd1aac988",
                    fit: [100, 100],
                    margin: [0, -10],
                  },
                  {
                    image: "https://firebasestorage.googleapis.com/v0/b/bar-cultural-unifei.appspot.com/o/LOGO%20ITACAR%20PRETO%20E%20LARANJA%20_page-0001.jpg?alt=media&token=7b5978b9-1495-4572-afcb-9d020ade8465",
                    fit: [100, 100],
                    margin: [0, -10],
                  },
                ],
                width: 250,
                alignment: "center",
                margin: [0, 20],
              },
            ],
            columnGap: 30,
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subtitle: {
            fontSize: 16,
            bold: true,
          },
          bold: {
            bold: true,
          },
        },
      };

      const pdfDoc = printer.createPdfKitDocument(docDefinition);

      pdfDoc.on("data", (chunk) => {
        chunks.push(chunk);
      });

      pdfDoc.on("end", () => {
        const result = Buffer.concat(chunks);

        const fileRef = bucket.file(
            uid,
            {metadata: {contentType: "application/pdf"}},
        );
        fileRef.save(result);
      });

      pdfDoc.end();
    });

// assim que criar o usuario, adiciona-lo numa colecao do Firestore
export const createdUserDocument = functions.auth.user()
    .onCreate((user ) => {
      db.collection("users")
          .doc(user.uid)
          .set(JSON.parse(JSON.stringify(user)));
    });

// assim que o ingresso for upado no storage, mandar email
export const sendEmail = functions.runWith({secrets: ["SG_KEY", "SG_TEMPLATE"]})
    .storage.object().onFinalize(async (object) => {
      sgMail.setApiKey(process.env.SG_KEY);

      const filePath = object.name;
      const fileBucket = object.bucket;
      const fileName = path.basename(filePath);

      const snapshot = await db.collection("users").doc(fileName).get();
      const email = snapshot.email;
      const name = snapshot.name;
      const party = snapshot.party;

      const msg = {
        to: email,
        from: "divulgacao@dceunifei.com",
        templateId: process.env.SG_TEMPLATE,
        dynamic_template_data: {
          subject: "Parabéns pela compra da" + party,
          name: name,
        },
        attachments: [
          {
            content: "Ingresso da festa" + party,
            filename: fileBucket,
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      };
      await sgMail.send(msg);
    });


