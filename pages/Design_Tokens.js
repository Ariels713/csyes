import styled from "styled-components"
import Head from "next/head"

const DesignTokenNav = styled.div`
  --Headline: hsla(63, 100%, 100%, 1);
  display: flex;
  flex-direction: row;
  padding: clamp(1rem, 1.5rem, 1.75rem);
  margin-top: 0.5rem;
  margin-right: 1.5rem;
  gap: 1rem;
  justify-content: flex-end;
  font-family: "DM Sans", sans-serif;
`

const DesignTokenLinks = styled.a`
  --Headline: hsla(63, 100%, 100%, 1);
  display: inline-block;
  font-size: clamp(0.9rem, 0.25vw + 1rem, 2.2rem);
  color: var(--Headline);
  font-weight: bolder;
  cursor: pointer;
`

function Design_Tokens() {
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
      <DesignTokenNav>
        <DesignTokenLinks>Home</DesignTokenLinks>
        <DesignTokenLinks>About</DesignTokenLinks>
        <DesignTokenLinks>Styles</DesignTokenLinks>
      </DesignTokenNav>
    </>
  )
}

export default Design_Tokens
