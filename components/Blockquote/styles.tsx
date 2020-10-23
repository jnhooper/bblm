
export const blockquoteStyle = {
  borderLeft: "5px solid #ccc",
  margin: "1.5em 10px",
  padding: "0.5em 10px",
  transition: 'all 0.3s ease-in-out 0s',
  ':before': {
    content: "open-quote",
    fontSize: "4em",
    lineHeight: "0.1em",
    marginRight: "0.25em",
    verticalAlign: "-0.4em"
  },
  p: {
    display: "inline",
  }
}

export const linkQuote = {
  ':hover,:focus ': {
    'blockquote':{
     borderLeft: '10px solid #fddb3a',
      ':before': {
        color: '#fddb3a'
      },
    }
  }
}
