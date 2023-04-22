import { Button, Container, Link, Row, Col, Text } from '@nextui-org/react';
import {HiRss} from "react-icons/hi"
export default function IndexPage() {
  return (
    <Container>
      <Row>
      <Col>
        <Text h1>
          Viva
        </Text>
        <Text h1 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>
          O Melhor do 
        </Text>
        <Text h1 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%"}} weight="bold" >
          Entreterimento 
        </Text>
        <Text>
          Somos o Diretório Central da UNIFEI e buscamos levar as MELHORES festas noturnas do Sul de Minas
        </Text>
        <Button data-testid="botao-festas" icon={<HiRss fill="currentColor" />} as={Link} shadow color="gradient" auto href='/festas'>
          Qual a Boa da Semana?
        </Button>
        <Row>
          <Col>
          <Text>+70 anos de História</Text>
          </Col>
          <Col>
          <Text>6k clientes/mês</Text>
          </Col>
        </Row>
      </Col>
      <Col data-testid="fotos">
        <Text>Colagem de fotos</Text>
      </Col>
      </Row>
    </Container>
  )
}
