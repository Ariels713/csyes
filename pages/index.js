import Head from "next/head"
import styled, { keyframes } from "styled-components"
import LayersUpsideDown from "../components/image_components/LayersUpsideDown"
import MeSVG from "../components/image_components/MeSVG"
import BlogStyleLayout from "../components/utils/BlogStyleLayout"
import TitleAndParagraph from "../components/utils/TitleAndParagraph"
import FullBleed from "../components/utils/FullBleed"
import Layers from "../components/image_components/Layers"

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
  font-size: clamp(1rem, 1vw, 1.5rem);
  margin-top: 1rem;
`

const CssSpan = styled.span`
  display: inline-block;
  position: relative;
  background-color: var(--pinkish);
  padding: 0px 8px;
  font-weight: bold;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
  animation: ${slide_in} 1000ms;
`

const NameSpan = styled.span`
  color: var(--dark-green);
  display: inline-block;
  font-size: clamp(1.25rem, 1.25vw, 1.75rem);
  font-weight: bolder;
  padding: 0px 8px;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
  background-color: var(--yellow);
`

export default function Home() {
  return (
    <>
      <Head>
        <title>CSYes</title>
        <meta name="description" content="Css Documentation and examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroWrapper>
        <TitleWrapper>
          <IntroTitle>
            Hey!! Let's learn <CssSpan>CSS</CssSpan> Together!
          </IntroTitle>
          <IntroCopy>
            I'm <NameSpan>Ariel!</NameSpan> Welcome to my CSS journey. I'm no
            expert, in fact I've created this website so I can document the
            thing's I build and learn with CSS.
          </IntroCopy>
        </TitleWrapper>
        <SVGWrapper>
          <MeSVG />
        </SVGWrapper>
      </IntroWrapper>
      {/* Blog style, 3 columns, copy in center */}
      <BlogStyleLayout>
        <FullBleed>
          <LayersUpsideDown />
        </FullBleed>
        <TitleAndParagraph title="Learn By Building">
          {" "}
          My learning path may differ than yours, but what works best for me is
          learning, writing, and building. The purporse of this website, is so I
          can practice what I'm learning, and apply them somewhere.
          <br /> <br />
          Everything that I've learned has been from others, here are the
          resources I've used along my path. This list will continue to grow
          through out my journey.
        </TitleAndParagraph>
      </BlogStyleLayout>
    </>
  )
}
