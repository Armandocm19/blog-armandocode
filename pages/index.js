import { BlogLayout } from '@/components/layouts'

import { getAllFileMetadata } from '../lib/mdx'
import { HomePage } from '../components/home'


export default function Home({ posts }) {

  return (
    <>
      <BlogLayout 
      title='Blog - ArmandoCode π¨βπ»' 
      pageDescription='ArmandoCode π¨βπ» - Desarrollador Web al que le encanta programar, y compartir con los demΓ‘s lo que sabe.' 
      posts={posts}
      >
          < HomePage posts={posts} />
      </BlogLayout>
    </>
  )
}


 export async function getStaticProps() {

    const posts = await getAllFileMetadata();

    return {
      props: {posts},
    }
 }