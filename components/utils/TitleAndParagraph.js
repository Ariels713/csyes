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
  background-color: var(--pinkish);
  padding: 0 8px;
  font-weight: bold;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
`

const AboutP = styled.p`
  display: inline-block;
  padding: 1rem 0;
`

function TitleAndParagraph({ children, title }) {
  return (
    <AboutWrapper>
      <AboutTitle>{title}</AboutTitle>
      <AboutP>{children}</AboutP>
    </AboutWrapper>
  )
}

export default TitleAndParagraph
