import React from 'react';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head';
import {Title, SubTitle, StyledLogo} from '../index';
import RootWrapper from '../../styles/layouts/RootWrapper';
import Main from 'styles/layouts/Main';
import Footer from 'styles/layouts/Footer';
import Link from '../../components/Link';

const Interview = (props) => {
  return (
    <RootWrapper>
      <Head>
        <title>{`Benicia Black Lives Matter Interview ${props.id}`}</title>
        <link rel="icon" href="/BBLM_Mark.svg" />
      </Head>
      <Main>
        <div
          style={{
            maxWidth: '600px',
            lineHeight: 1.2,
            margin: '0 30px'
          }}
        >
          <ReactMarkdown>
            {props.markdown}
          </ReactMarkdown>
        </div>
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
          Interviews
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

export default Interview;