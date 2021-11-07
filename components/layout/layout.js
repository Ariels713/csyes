import styled from "styled-components"
import Footer from "./Footer"
import Navbar from "./Navbar"

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(min(200px, 30%), 1fr) 6fr;
  grid-template-rows: 1fr 4rem;
  grid-template-areas:
    "navbar main"
    "navbar footer";
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const NavWrapper = styled.div`
  grid-area: navbar;
  background-color: var(--light-green);
  min-height: 100vh;
`

const MainWrapper = styled.main`
  background-color: var(--dark-green);
  grid-area: main;
  min-height: 100%;
`

const FooterWrapper = styled.footer`
  background-color: var(--white);
  grid-area: footer;
`

export default function Layout({ children }) {
  return (
    <>
      <LayoutWrapper>
        <NavWrapper>
          <Navbar />
        </NavWrapper>
        <MainWrapper>{children}</MainWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </LayoutWrapper>
    </>
  )
}
