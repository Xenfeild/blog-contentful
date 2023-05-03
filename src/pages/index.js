import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className='text-3xl font-bold text-red-600'>Hello world</h1>
        <Card title='toto'/>
      </Layout>
    </div>
  )
}
