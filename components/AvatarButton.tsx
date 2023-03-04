import React from "react"
import { Dropdown, Navbar, Avatar, Text, Link } from "@nextui-org/react"
import { useUser } from "reactfire";
import { useRouter } from "next/router";


export default function AvatarButton(){
  const { status, data: user } = useUser();
  const router = useRouter();
  return (
    <Navbar.Content
    css={{
      "@xs": {
        w: "12%",
        jc: "flex-end",
      },
    }}
  >
    <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="Menu do usuário"
              color="secondary"
              onAction={(actionKey) => router.push("/" +  actionKey )}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Logado como 
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Minha Carterinha
              </Dropdown.Item>
              <Dropdown.Item key="analytics">
                Minhas Festas
              </Dropdown.Item>
              <Dropdown.Item key="suporte" withDivider>
                Suporte
              </Dropdown.Item>
              <Dropdown.Item key="auth/logout" withDivider color="error">
                Sair
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Navbar.Content>
          
  )
};

