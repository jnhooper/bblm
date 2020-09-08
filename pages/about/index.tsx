import {Title, SubTitle} from '../index';
import RootWrapper from '../../styles/layouts/RootWrapper';
import Main from 'styles/layouts/Main';
import Footer from 'styles/layouts/Footer';
import Link from '../../components/Link';


const About = () => {
  return (
    <RootWrapper>
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