import Head from "next/head"
import styled from "styled-components"
import { keyframes } from "styled-components"
import MeSVG from "../components/image_components/MeSVG"

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
const IntroWrapper = styled.div`
  display: flex;
  width: min(1000px, 100%);
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  color: var(--white);
`

const SVGWrapper = styled.div`
  flex: 1 1 auto;
`

const TitleWrapper = styled.div`
  flex: 1 1 auto;
`

const IntroTitle = styled.h1`
  line-height: 1.3;
  font-size: clamp(2.25rem, 3vw, 3.5rem);
`

const IntroCopy = styled.p`
  width: 40ch;
`

const WordSpan = styled.span`
  display: inline-block;
  background-color: var(--pinkish);
  padding: 2px 8px;
  font-weight: bold;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
  animation: ${slide_in} 1000ms;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSYes</title>
        <meta name="description" content="Css Documentation and examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroWrapper>
        <TitleWrapper>
          <IntroTitle>
            Hello! Let's learn <WordSpan>CSS</WordSpan> Together!
          </IntroTitle>
          <IntroCopy>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            tempore maxime eligendi nisi. Dignissimos aliquam consequatur
            debitis mollitia ducimus, eius voluptatibus illo ratione ipsa
            voluptatum nisi voluptas commodi, magnam eaque.
          </IntroCopy>
        </TitleWrapper>
        <SVGWrapper>
          <MeSVG />
        </SVGWrapper>
      </IntroWrapper>
    </div>
  )
}
