import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout name="Home">
      <div className='p-4'>
        <h1 className="text-4xl text-center font-bold underline">hack::peel</h1>
      </div>
    </Layout>
  )
}
