import Head from "next/head"
import Link from "next/link"

import styled from "styled-components"

const NavWrapper = styled.div`
  --primary-color: hsla(177, 100%, 14%, 1);
  --secondary-color: hsla(161, 30%, 75%, 1);
  --Headline: hsla(63, 100%, 100%, 1);
  --Link_Colors: hsla(161, 30%, 75%, 1);
  --Highlight: hsla(36, 93%, 68%, 1);
  --Text_Color: hsla(179, 99%, 6%, 1);
  display: flex;
  flex-direction: column;
  color: var(--Headline);
  min-height: 100%;
  font-family: "DM Sans", sans-serif;
`

const Title = styled.h1`
  font-size: clamp(0.9rem, 1.25vw + 1rem, 2.2rem);
  text-align: center;
  padding: 1rem;
`

const NavList = styled.ul``

const NavListItem = styled.li``

const NavLinks = styled.a`
  display: block;
  cursor: pointer;
  color: var(--Text_Color);
`
function Navbar() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavWrapper>
        <Title>Self-CSS</Title>
        <NavList>
          <NavListItem>
            <Link href="/Design_Tokens">
              <NavLinks>Design Tokens</NavLinks>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/Grid">
              <NavLinks>Grid</NavLinks>
            </Link>
          </NavListItem>
        </NavList>
      </NavWrapper>
    </>
  )
}

export default Navbar
