import { Grid, Card, Text, Col, Row, Button } from "@nextui-org/react"
import React from "react"
import {useFirebaseApp} from 'reactfire'
const { getProducts, getStripePayments, createCheckoutSession } = require("@stripe/firestore-stripe-payments");


export default async function Festas(){

  const app = useFirebaseApp()

  const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers",
  });

const products = await getProducts(payments, {
  includePrices: true,
  activeOnly: true,
  where: [
    ["metadata.festa", "==", "true"]
  ]
});

  return (
    <Grid.Container gap={2} justify="center" >
      <>
      {products.map((festa) => 
      {console.log(festa)}
      )}
      <Grid>
        <Card isHoverable css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Destaque
        </Text>
        <Text h3 color="black">
          Semana Federal
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://firebasestorage.googleapis.com/v0/b/bar-cultural-unifei.appspot.com/o/Semana%20Federal.jpg?alt=media&token=2c4172a6-7ae7-4d36-a7aa-182aab6ec5af"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Semana Federal "
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col span={3}>
                <Card.Image
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
        </Col>
        <Col>
          <Text color="#000" size={12}>
            Available soon.
          </Text>
          <Text color="#000" size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Compre Agora
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
        </Card>
      </Grid>
      </>
    </Grid.Container>
  )
};

