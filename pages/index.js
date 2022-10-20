import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import DateCounter from "../components/DateCounter"
import TeamSection from "../components/TeamSection"

export default function Home() {
  return (
    <Layout name="Home">

      <div>
        <h1 className="text-7xl text-center font-bold underline p-8">hack::peel</h1>
      </div>
    </Layout>
  )
}
