export const Main = ({children}) => (
  <main
    css={{
      padding: '5rem 0',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </main>
)