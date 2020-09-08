import Head from 'next/head';
import styled from 'styled-components'

import RootWrapper from 'styles/layouts/RootWrapper'
import Main from 'styles/layouts/Main'
import Footer from 'styles/layouts/Footer';
import Link from '../components/Link'

export const Title = styled.h1({
  textAlign: 'center'
});

export const SubTitle = styled.h2({
  textAlign: 'center'
});

export default function Home() {

  return (
    <RootWrapper>
      <Head>
        <title>Benicia Black Lives Matter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Benicia Black Lives Matter</Title>
        <SubTitle>Coming soon</SubTitle>
      </Main>

      <Footer>
        <Link
          href="/about"
        >
          About
        </Link>
      </Footer>
    </RootWrapper>
  )
}
