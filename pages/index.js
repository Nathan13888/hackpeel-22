import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import DateCounter from "../components/DateCounter"

export default function Home() {
  return (
    <Layout name="Home">

      <div className='p-4'>
        <h3 className="text-sm text-center">December 10th, 2022 - December 12th, 2022</h3>
        <h1 className="text-7xl text-center font-bold underline p-8">hack::peel</h1>
      {/*Replace with logo later*/}
        <p className="text-md text-center">Insert introduction here</p>
      </div>
    </Layout>
  )
}
