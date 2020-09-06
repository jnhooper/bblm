import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

const StyledWrapper = styled.div({
  backgroundColor: 'black',
  color: 'white',
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export default function Home() {
  return (
    <StyledWrapper>
      <Head>
        <title>Benicia Black Lives Matter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Benicia Black Lives Matter</h1>
        <h2>Coming soon</h2>
      </main>

      <footer className={styles.footer}>
      </footer>
    </StyledWrapper>
  )
}
