const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore()

const Printer = require('pdfmake');
const fonts = require('pdfmake/build/vfs_fonts.js');

const fontDescriptors = {
  Roboto: {
    normal: Buffer.from(fonts.pdfMake.vfs['Roboto-Regular.ttf'], 'base64'),
    bold: Buffer.from(fonts.pdfMake.vfs['Roboto-Medium.ttf'], 'base64'),
    italics: Buffer.from(fonts.pdfMake.vfs['Roboto-Italic.ttf'], 'base64'),
    bolditalics: Buffer.from(fonts.pdfMake.vfs['Roboto-Italic.ttf'], 'base64'),
  }
};

const bucket = admin.storage().bucket();

//trigger based on Stripe finished payment
export const gerarIngresso = functions.firestore
  .document('ingresso/{docId}')
  .onWrite((snap, context) => { 
    const value = snap.data();
    const name  = value.name;
    const uid = snap.data().uid;
    const printer = new Printer(fontDescriptors);
    const chunks: any[] | readonly Uint8Array[] = [];
  const docDefinition = {
    content: [
      // if you don't need styles, you can use a simple string to define a paragraph
      'This is a standard paragraph, using default style',
      // using a { text: '...' } object lets you set styling properties
      {
        text: 'This paragraph will have a bigger font',
        fontSize: 15
      },
      // if you set the value of text to an array instead of a string, you'll be able
      // to style any part individually
      {
        text: [
          'This paragraph is defined as an array of elements to make it possible to ',
          {
            text: 'restyle part of it and make it bigger ',
            fontSize: 15
          },
          'than the rest.'
        ]
      }
    ]
  };
  
  const pdfDoc = printer.createPdfKitDocument(docDefinition);

  pdfDoc.on('data', (chunk) => {
    chunks.push(chunk);
  });

  pdfDoc.on('end', () => {
    const result = Buffer.concat(chunks);
    
    const fileRef = bucket.file(
      docId,
      { metadata: { contentType: 'application/pdf' } }
    );
    fileRef.save(result);
  });

  pdfDoc.end();
});
    



//assim que criar o usuario, adiciona-lo numa colecao do Firestore   
export const createdUserDocument = functions.auth.user().onCreate((user: User) => {
  db.collection("users")
  .doc(user.uid)
  .set(JSON.parse(JSON.stringify(user)))
})