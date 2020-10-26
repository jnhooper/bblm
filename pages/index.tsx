import Head from 'next/head';
import styled from 'styled-components'

import RootWrapper from 'styles/layouts/RootWrapper'
import Main from 'styles/layouts/Main'
import Footer from 'styles/layouts/Footer';
import Link from '../components/Link'
// import LogoMark from '../public/BBLM_Mark.svg'
import Logo from '../components/Logo';


export const Title = styled.h1({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center'
});

export const SubTitle = styled.h2({
  textAlign: 'center',
});

// export const StyledLogo = styled(LogoMark)(
//   {
//     width: '50px',
//     marginRight: '24px',
//     path: {
//       fill: 'white'
//     },
//     ellipse: {
//       fill: 'black'
//     }
//   }
// )

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
        <h1
          css={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Logo/>
          Benicia Black Lives Matter
        </h1>
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
