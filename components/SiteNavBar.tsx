import React from 'react';
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { LogoBarCultural } from "./LogoBarCultural";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'


export  function SiteNavBar(){

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();


    return(
        <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <LogoBarCultural />
          <Text b color="inherit" hideIn="xs">
            Bar Cultural
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="festas">Festas</Navbar.Link>
          <Navbar.Link isActive href="socios">Sócios</Navbar.Link>
          <Navbar.Link href="parceiros">Parceiros</Navbar.Link>
          <Navbar.Link href="sobre-nos">Sobre nós</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
          <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="signup">
              Cadastro
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    )
}