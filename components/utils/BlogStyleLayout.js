import styled from "styled-components"

const IntroBody = styled.div`
  /* min-height: 100%; */
  background-color: var(--light-green);
  display: grid;
  grid-template-columns:
    1fr
    min(60ch, 100%)
    1fr;
  padding-left: 16px;
  padding-right: 16px;
`
function BlogStyleLayout({ children }) {
  return <IntroBody>{children}</IntroBody>
}

export default BlogStyleLayout
