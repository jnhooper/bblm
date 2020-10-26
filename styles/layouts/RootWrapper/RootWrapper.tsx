import styled from 'styled-components';

export const RootWrapper = ({children}) => (
  <div
    css={{
      backgroundColor: '#050505',
      // backgroundColor: '#cfdbd5',
      // color: '#242423',
      color: 'white',
      minHeight: '100vh',
      padding: '0 0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
  {children}
</div>
)

export default RootWrapper;