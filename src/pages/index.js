import Image from 'next/image'
import { Inter } from 'next/font/google'

import Layout from '@/components/layout/Layout'
import { createClient } from 'contentful'
import Card from '@/components/cards/Card'
import Link from 'next/link'
import HeroHome from '@/components/HeroHome'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
    <div>
      <Layout>
      <HeroHome/>
        <div className='content home flex justify-center'>
        {
          posts.map((post)=>(
            <Link href={`post/${post.fields.slug}`}>
            <Card 
            key={post.sys.id} 
            post={post}
            />
            </Link>
          ))}
          </div>
      </Layout>
      
    </div>
  )
}


export async function getStaticProps() {
  // 1 - Connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // console.log(client);

  // 2 - Recuperer data en cas de succes pour le content_type => escciBlog
  // Je limite à 8 post
  const data = await client.getEntries({
    content_type: 'escciBlog',
    order: "sys.createdAt",
    limit: 9,
  });

  // console.log(data);

// 3- on envoie la data dans le props de ma page

  return {
    props: {
      posts: data.items,
    },
  };
}