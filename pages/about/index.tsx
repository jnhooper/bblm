import Head from 'next/head';

import {Title, SubTitle} from '../index';
import RootWrapper from '../../styles/layouts/RootWrapper';
import Main from 'styles/layouts/Main';
import Footer from 'styles/layouts/Footer';
import Link from '../../components/Link';


const About = () => {
  return (
    <RootWrapper>
      <Head>
        <title>About Benicia Black Lives Matter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>About Benicia Black Lives Matter</Title>
        <SubTitle>Coming soon</SubTitle>
      </Main>
      <Footer>
        <Link
          href="/"
        >
          Home
        </Link>
      </Footer>
    </RootWrapper>
  )
}

export default About;