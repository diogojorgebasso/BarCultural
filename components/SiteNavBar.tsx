import React from 'react';
import { Navbar, Button, Text } from "@nextui-org/react";
import  LogoBarCultural  from "../public/logo192.png";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import  Image  from 'next/image';
import { useUser } from 'reactfire'
import LogInButton from './LogInButton';
import AvatarButton from './AvatarButton';
export  function SiteNavBar(){

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const { status, data:user } = useUser();


    return(
        <Navbar css={{
          maxW: "100%"
        }}
       isCompact
       variant="floating"
       shouldHideOnScroll
       >
        <Navbar.Brand>
          <Image width={100} height={100} src={LogoBarCultural} priority alt="Logo Bar Cultural"/>
          <Text b color="inherit" hideIn="xs">
            Bar Cultural
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="festas">Festas</Navbar.Link>
          <Navbar.Link href="socios">Sócios</Navbar.Link>
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
          <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          {}
          
        </Navbar.Content>
        </Navbar.Content>
      </Navbar>
    )
}