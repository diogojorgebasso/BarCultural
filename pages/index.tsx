import Link from 'next/link'
import { Button, Grid, Text } from '@nextui-org/react';
import {HiRss} from "react-icons/hi"
export default function IndexPage() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs>
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
          Somos o Diretório Acadêmico da UNIFEI e buscamos levar as MELHORES festas noturnas do Sul de Minas
        </Text>
        <Button icon={<HiRss fill="currentColor" />} shadow color="gradient" auto href='/festas'>
          Qual a Boa da Semana?
        </Button>
        <Grid.Container gap={2} justify="space-between">
          <Text>+70 anos de História</Text>
          <Text>6k pessoas/mês</Text>
        </Grid.Container>
      </Grid>
      <Grid xs>
        <Text>Colagem de fotos</Text>
      </Grid>
    </Grid.Container>
  )
}
