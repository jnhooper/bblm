import React from 'react';
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';

import Head from 'next/head';
import RootWrapper from '../../styles/layouts/RootWrapper';
import Main from 'styles/layouts/Main';
import Footer from 'styles/layouts/Footer';
import Link from '../../components/Link';

const StyledMarkDown = styled(ReactMarkdown)({
  lineHeight: '1.7rem',
  p: {
    fontSize: '1.15rem',
  }
})

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
            margin: '0 30px',
          }}
        >
          <Link href="/interviews">
            &#60; Back to <em>Our Voices</em>
          </Link>
          <StyledMarkDown>
            {props.markdown}
          </StyledMarkDown>
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

export default Interview;