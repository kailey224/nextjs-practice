import Image from 'next/image';
import Link from 'next/link'

export default function Photos({photo}: any) {
    const { title, url } = photo; 

    return (
      <>
        <h2>image : {title}</h2>
        <Image src={url} width={500} height={500} alt={photo.title}/>
        <Link href="/about">go back home</Link>
      </>
    )
  }

export const getStaticProps = async ({params}: any) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${params.id}`;
    const res = await fetch(url);
    const photo = await res.json();
  
    return {
      props: {photo}
    }
}

export const getStaticPaths = async() => {
    const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`;
    const res = await fetch(url);
    const photos = await res.json();
    const ids = photos.map((photo: { id: number; }) => photo.id);
    const paths = ids.map((id: { toString: () => any; }) => {
        return {
            params: {id: id.toString()}
        }
    })

    return {
        paths,
        fallback: false,
    }
}