import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import Interview from './Interview';

const Post = (props) => {
  const router = useRouter()
  const query = router.query

  return (
  <Interview
    markdown={props.interview}
    id={query.id}
  />
  )
}

export default Post


export async function getStaticPaths() {
  return {
    paths: [
    { params: { id: '1' } },
    { params: { id: '2' } }],
    fallback: false // See the "fallback" section below
  };
}


export async function getStaticProps(context) {
  const {params} = context;
  const markdownDirectory = path.join(process.cwd(), 'interviews');
  const fileName = path.join(markdownDirectory, `${params.id}.md`);
  const interview = fs.readFileSync(fileName, 'utf8')
  return {
    props: {
      interview: interview
    }, // will be passed to the page component as props
  }
}
