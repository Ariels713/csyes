import { forwardRef } from "react"
import Head from "next/head"
import Link from "next/link"
import styled, { keyframes } from "styled-components"

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
// Used react.forwardRef in order to pass down children/href to it's children.
// href lets us pass our link string further down the tree.
const NavLink = forwardRef((props, ref) => {
  console.log("props.href", props.href)
  return (
    <Link href={props.href}>
      <NavLinkA>
        {props.children}
        <NavLinkRevealed>{props.children}</NavLinkRevealed>
      </NavLinkA>
    </Link>
  )
})

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
          <NavListItem>
            <NavLink href="/">My Path</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/Grid">Grid</NavLink>
          </NavListItem>
        </NavList>
      </NavWrapper>
    </>
  )
}

export default Navbar
