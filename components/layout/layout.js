import styled from "styled-components"
import Footer from "./Footer"
import Navbar from "./Navbar"

const LayoutWrapper = styled.div`
  --primary-color: hsla(177, 100%, 14%, 1);
  --secondary-color: hsla(161, 30%, 75%, 1);
  --Headline: hsla(63, 100%, 100%, 1);
  --Link_Colors: hsla(161, 30%, 75%, 1);
  --Highlight: hsla(36, 93%, 68%, 1);
  --Text_Color: hsla(179, 99%, 6%, 1);
  display: grid;
  grid-template-columns: minmax(min(200px, 30%), 1fr) 6fr;
  /* grid-template-rows: 12fr 1fr; */
  grid-template-areas:
    "navbar main"
    "navbar footer";
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const NavWrapper = styled.div`
  grid-area: navbar;
  background-color: var(--secondary-color);
  min-height: 100vh;
`

const MainWrapper = styled.main`
  background-color: var(--primary-color);
  grid-area: main;
  min-height: 100%;
`

const FooterWrapper = styled.footer`
  max-height: 50px;
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
