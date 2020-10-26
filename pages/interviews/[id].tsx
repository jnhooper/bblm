import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import _findIndex from 'lodash/findIndex';
import Interview from './Interview';

const Post = (props) => {
  const router = useRouter()
  const query = router.query

  return (
  <Interview
    markdown={props.interview}
    blurb={props.blurb}
    id={query.id}
  />
  )
}

export default Post


export async function getStaticPaths() {
  const markdownDirectory = path.join(process.cwd(), 'interviews');
  const jsonFile = path.join(markdownDirectory, 'interviews.json');
  const interviewJSON = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  const paths = interviewJSON.map(interview => ({params: {id: interview.id}}));
  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}


export async function getStaticProps(context) {
  const {params} = context;
  const markdownDirectory = path.join(process.cwd(), 'interviews');
  const fileName = path.join(markdownDirectory, `${params.id}.md`);
  const interview = fs.readFileSync(fileName, 'utf8')
  //todo can we get this passed down so we dont read the file twice?
  const jsonFile = path.join(markdownDirectory, 'interviews.json');
  const interviewJSON = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
  const interviewObj = interviewJSON.filter(interview => interview.id === params.id)[0];
  return {
    props: {
      interview: interview,
      blurb: interviewObj.blurb
    }, // will be passed to the page component as props
  }
}
