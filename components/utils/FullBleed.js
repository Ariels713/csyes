import styled from "styled-components"

const FullBleedWrapper = styled.div`
  grid-column: 1 / -1;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -59px;
`

function FullBleed({ children }) {
  return <FullBleedWrapper>{children}</FullBleedWrapper>
}

export default FullBleed
