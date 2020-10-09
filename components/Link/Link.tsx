import NextLink from 'next/link';
import styled from 'styled-components';


/**
 * I love this blog https://tobiasahlin.com/blog/css-trick-animating-link-underlines/
 */
const StyledLink = styled.a({
  position: 'relative',
  // color: 'white',
  textDecoration: 'none',
  ':hover,:focus': {
    // color: 'white',
  },
  '::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '0.1rem',
    bottom: 0,
    left: 0,
    backgroundColor: '#fddb3a',
    // backgroundColor: '#333533',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'all 0.3s ease-in-out 0s',
  },
  ':hover::before, :focus::before': {
    visibility: 'visible',
    transform: 'scaleX(1)',
  }
});

export const Link = (props) => {
  const {children, ...rest} = props;
  return(
    <NextLink passHref {...rest}>
      <StyledLink>
        {children}
      </StyledLink>
    </NextLink>
  )
}