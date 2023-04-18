import HeadInfo from '../components/HeadInfo'
import Image from 'next/image';

export default function About({photos}: any) {
    return (
      <>
        <HeadInfo title="about"/>
        <h1>about</h1>
            <ul>{photos.map((photo: any) => (
                <li key={photo.id}>
                    <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}/>
                </li>
            ))}</ul>
      </>
    )
  }

  export const getStaticProps = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_end=10';
    const res = await fetch(url);
    const photos = await res.json();
  
    return {
      props: {photos}
    }
  }