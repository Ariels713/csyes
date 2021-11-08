import styled from "styled-components"

const HalfBleedWrapper = styled.div`
  grid-column: 1 / -1;
  width: min(800px 100%);
  margin: auto;
  padding: 2rem 0;
`

function HalfBleed({ children }) {
  return <HalfBleedWrapper>{children}</HalfBleedWrapper>
}

export default HalfBleed
