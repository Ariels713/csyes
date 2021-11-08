import { forwardRef } from "react"
import Head from "next/head"
import Link from "next/link"
import styled, { keyframes } from "styled-components"
import MonsterCSS from "./MonsterCSS"
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
  position: relative;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr;
  color: var(--Headline);
  min-height: 100%;
  border-right: solid 3px;
  border-right-color: var(--darkest-green);
  isolation: isolate;
`
const MainHeader = styled.div`
  display: grid;
  place-content: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--light-green);
`

const Title = styled.h1`
  display: inline-block;
  font-size: clamp(0.9rem, 1.25vw + 1rem, 2.2rem);
  text-align: center;
  padding: 1rem;
  margin: 2rem 0;
`

const NavList = styled.nav`
  position: sticky;
  top: 175px;
  padding: clamp(0.5rem, 1rem, 1.25rem);
`

const Aside = styled.div`
  position: relative;
  z-index: 1;
`

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
// Used react.forwardRef in order to pass down children/href to it's children.
// href lets us pass our link string further down the tree.

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
  display: block;
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--pinkish);
  padding: 0 14px;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  transition: clip-path 1000ms;
  border-radius: 4px;
  ${NavLinkA}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`
const NavLink = forwardRef((props, ref) => {
  return (
    <Link href={props.href}>
      <NavLinkA>
        {props.children}
        <NavLinkRevealed>{props.children}</NavLinkRevealed>
      </NavLinkA>
    </Link>
  )
})

function Navbar() {
  return (
    <>
      <NavWrapper>
        {/* Main Header */}
        <MainHeader>
          <Title>
            <MonsterCSS />
          </Title>
        </MainHeader>
        <Aside>
          <NavList>
            <NavListItem>
              <NavLink href="/">My Path</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="/Grid">Grid</NavLink>
            </NavListItem>
          </NavList>
        </Aside>
      </NavWrapper>
    </>
  )
}

export default Navbar
