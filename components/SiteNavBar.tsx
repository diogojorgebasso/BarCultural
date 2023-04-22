import React, {useCallback} from 'react';
import { Navbar, Link, Text, Switch, useTheme } from "@nextui-org/react";
import  LogoBarCultural  from "../public/logo192.png";
import { useTheme as useNextTheme } from 'next-themes'
import  Image  from 'next/image';
import { useSigninCheck } from 'reactfire'
import LogInButton from './LogInButton';
import AvatarButton from './AvatarButton';

export  function SiteNavBar(){

  const { setTheme } = useNextTheme();
  const setThemeAction = useCallback((e) => {setTheme(e.target.checked ? 'dark' : 'light')}, [])
  const { isDark } = useTheme();
  const { data: signInCheckResult } = useSigninCheck();
  const collapseItems = [
    "Festas",
    "Sócios",
    "Empresas Parceiras",
    "Sobre nós",
    "Perfil",
  ];
    return(
        <Navbar
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
        onClick={setThemeAction}
      />
          </Navbar.Item>

          {signInCheckResult?.signedIn ? <AvatarButton/> : <LogInButton />}
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    )
}
