import fs from 'fs'
import path from 'path'
import React from 'react';
import Head from 'next/head';

import {Title, SubTitle, StyledLogo} from '../index';
import RootWrapper from 'styles/layouts/RootWrapper'
import Main from 'styles/layouts/Main'
import Footer from 'styles/layouts/Footer';
import Link from '../../components/Link'
import LogoMark from '../../public/BBLM_Mark.svg'
import { Blockquote } from 'components/Blockquote/Blockquote';

const InterviewHome = (props) => {
  const {interviews} = props
  return (
    <RootWrapper>
      <Head>
        <title>Our voices - Benicia Black Lives Matter</title>
        <link rel="icon" href="/BBLM_Mark.svg" />
      </Head>
      <Main>
        <div
          style={{
            maxWidth: '600px'
          }}
        >
          <Title>
            Our voices
          </Title>
          <ul
            style={{
              listStyleType: 'none',
              paddingLeft: 0,
              fontSize: '1.2rem'
            }}
          >
            {
              interviews.map((interview, index) => (
                <li
                  key={`interview_${index}`}
                  style={{
                    marginTop: '30px'
                  }}
                >
                  <Blockquote
                    href={`/interviews/${interview.id}`}
                  >
                    {interview.blurb}
                  </Blockquote>
                </li>
              ))
            }
          </ul>
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
          Our voices
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

export default InterviewHome;


export async function getStaticProps() {
  const markdownDirectory = path.join(process.cwd(), 'interviews');
  const fileName = path.join(markdownDirectory, 'interviews.json');
  const interviews = JSON.parse(fs.readFileSync(fileName, 'utf8'))
  return {
    props: {
      interviews
    }, // will be passed to the page component as props
  }
}