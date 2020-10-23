import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import {blockquoteStyle, linkQuote} from './styles';

const StyledBlockquote = styled.blockquote(blockquoteStyle)
const StyledLinkBlock = styled.a(linkQuote)

export const Blockquote = (props) => {
  const {children, cite, href} = props;
  const citeUrl = cite ? cite : (href ? href : null);
  const quote = (
    <StyledBlockquote cite={citeUrl}>
      <p>
        {
          children
        } ...<em>Click to read more</em>
      </p>
    </StyledBlockquote>
  )

  return (
    props.href ?
    (
      <NextLink passHref href={href}>
        <StyledLinkBlock >
          {quote}
        </StyledLinkBlock>
      </NextLink>
    )
 : quote

  );
}

export default Blockquote;