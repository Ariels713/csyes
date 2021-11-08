import styled from "styled-components"

const AboutWrapper = styled.div`
  color: var(--darkest-green);
  grid-column: 2;
  margin-top: -150px;
`

const AboutTitle = styled.h2`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: var(--white);
  font-size: 2.5rem;
`

const AboutP = styled.p``

function TitleAndParagraph({ children, title }) {
  return (
    <AboutWrapper>
      <AboutTitle>{title}</AboutTitle>
      <AboutP>{children}</AboutP>
    </AboutWrapper>
  )
}

export default TitleAndParagraph
