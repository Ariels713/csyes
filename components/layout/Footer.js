import styled from "styled-components"
import Head from "next/head"

const FooterWrapper = styled.div`
  --Text_Color: hsla(179, 99%, 6%, 1);
  display: grid;
  place-content: center;
`
const FooterCopy = styled.h3`
  font-family: "DM Sans", sans-serif;
  padding: 1rem;
  color: var(--Text_Color);
`

function Footer() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>{" "}
      <FooterWrapper>
        <FooterCopy>Made With Love and Tech</FooterCopy>
      </FooterWrapper>{" "}
    </>
  )
}

export default Footer
