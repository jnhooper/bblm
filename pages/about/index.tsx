import Head from 'next/head';
import {Title, SubTitle} from '../index';
import RootWrapper from '../../styles/layouts/RootWrapper';
import Main from 'styles/layouts/Main';
import Footer from 'styles/layouts/Footer';
import Link from '../../components/Link';
import Logo from '../../components/Logo';


const About = () => {
  return (
    <RootWrapper>
      <Head>
        <title>About Benicia Black Lives Matter</title>
        <link rel="icon" href="/BBLM_Mark.svg" />
      </Head>
      <Main>
        <Title>
          <Logo/>
          About Benicia Black Lives Matter</Title>
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

export default About;