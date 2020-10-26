import React from 'react';
import NextLink from 'next/link';
import {blockquoteStyle, linkQuote} from './styles';


export const Blockquote = (props) => {
  const {children, cite, href} = props;
  const citeUrl = cite ? cite : (href ? href : null);
  const quote = (
    <blockquote css={blockquoteStyle} cite={citeUrl}>
      <p>
        {
          children
        } ...<em>Click to read more</em>
      </p>
    </blockquote>
  )

  return (
    props.href ?
    (
      <NextLink passHref href={href}>
        <a css={linkQuote}>
          {quote}
        </a>
      </NextLink>
    )
 : quote

  );
}

export default Blockquote;