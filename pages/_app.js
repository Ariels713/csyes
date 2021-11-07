import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "../components/layout/layout"

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: hsla(177, 100%, 14%, 1);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
ul,
ol,
dl,
dt,
dd {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture {
  max-width: 100%;
  display: block;
}
input,
button,
textarea,
select {
  font: inherit;
}

#__next {
  isolation: isolate;
}
`

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
