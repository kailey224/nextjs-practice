import HeadInfo from '../components/HeadInfo'

export default function Home({posts}: any) {

  return (
    <>
      <HeadInfo title="home"/>
      <h1>hello</h1>
      <ul>
        {posts.map( (post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  )
}

// export const getServerSideProps = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10';
//   const res = await fetch(url);
//   const posts = await res.json();

//   return {
//     props: {posts}
//   }
// }

export const getStaticProps = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10';
  const res = await fetch(url);
  const posts = await res.json();

  return {
    props: {posts}
  }
}