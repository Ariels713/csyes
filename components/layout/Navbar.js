import Head from 'next/head'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const slide_in = keyframes`
  from {
    transform: translateX(-10px);
    clip-path:polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  to {
    transform: translateX(0px);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`

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
`

const Title = styled.h1`
  font-size: clamp(0.9rem, 1.25vw + 1rem, 2.2rem);
  text-align: center;
  padding: 1rem;
`

const NavList = styled.ul``

const NavListItem = styled.li`
  margin-bottom: 0.5rem;
  list-style: none;
`

const TitleSpan1 = styled.span`
  display: inline-block;
  color: var(--pinkish);
  font-weight: bolder;
`
const TitleSpan2 = styled.span`
  display: inline-block;
  color: var(--dark-green);
`

function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <NavLinkA>
        {children}
        <NavLinkRevealed>{children}</NavLinkRevealed>
      </NavLinkA>
    </Link>
  )
}
const NavLinkA = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  color: var(--dark-green);
  background-color: var(--yellow);
  font-size: clamp(0.75rem, 1.25vw, 1.25rem);
  font-weight: bolder;
  width: fit-content;
  border-radius: 4px;
  padding: 0 14px;
`

const NavLinkRevealed = styled.span`
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--pinkish);
  padding: 0 14px;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  transition: clip-path 1000ms;
  ${NavLinkA}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`

function Navbar() {
  return (
    <>
      <NavWrapper>
        <Title>
          <TitleSpan1>CS</TitleSpan1>
          <TitleSpan2>YE</TitleSpan2>
          <TitleSpan1>S</TitleSpan1>
        </Title>
        <NavList>
          {/* <NavListItem>
            <Link href='/'>
              <NavLinks>
                Intro
                <NavLinkHidden aria-hidden='true'>Intro</NavLinkHidden>
              </NavLinks>
            </Link>
          </NavListItem> */}
          {/* <NavListItem>
            <Link href='/Box_Model'>
              <NavLinks>The Box Model</NavLinks>
            </Link>
          </NavListItem> */}
          {/* <NavListItem>
            <Link href='/Grid'>
              <NavLinks>Grid</NavLinks>
            </Link>
          </NavListItem> */}
          <NavListItem>
            <Link href='/'>
              <NavLink>My Path</NavLink>
            </Link>
          </NavListItem>
          <NavListItem>
            <NavLink>Grid</NavLink>
          </NavListItem>
        </NavList>
      </NavWrapper>
    </>
  )
}

export default Navbar
