import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "../components/layout/layout"
import Head from "next/head"
const GlobalStyles = createGlobalStyle`
:root {
  --dark-green: hsla(177, 100%, 14%, 1);
  --light-green: hsla(161, 30%, 75%, 1);
  --darkest-green: hsla(179, 99%, 6%, 1);
  --yellow: hsla(36, 93%, 68%, 1);
  --pinkish: hsla(360, 68%, 63%, 1.00);
  --white: hsla(63, 100%, 100%, 1.00);
  --gray: hsla(322, 7%, 90%, 1);
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
  font-family: "DM Sans", sans-serif;
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
