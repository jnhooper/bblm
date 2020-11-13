import Head from 'next/head';

import RootWrapper from 'styles/layouts/RootWrapper'
import Main from 'styles/layouts/Main'
import Footer from 'styles/layouts/Footer';
import Link from '../components/Link'
import Logo from '../components/Logo';

export const Title = ({children}) => (
  <h1
    css={{
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {
      children
    }
  </h1>
);

export const SubTitle = ({children}) => (
  <h2 css={{textAlign: 'center'}}>
    {
      children
    }
  </h2>
);


export default function Home() {

  return (
    <RootWrapper>
      <Head>
        <title>Benicia Black Lives Matter</title>
        <link rel="icon" href="/BBLM_Mark.svg" />
        <meta
          name="Description"
          content="Benicia Black Lives Matter, Home Page"
        />
      </Head>

      <Main>
        <Title>
          <Logo/>
          Benicia Black Lives Matter
       </Title>
        <SubTitle>Coming soon</SubTitle>
      </Main>

      <Footer>
        <Link
          href="/"
        >
          Home
        </Link>
        <Link
          href="/interviews"
        >
          Our Voices
        </Link>
        <Link
          href="/about"
        >
          About
        </Link>
      </Footer>
    </RootWrapper>
  )
}
