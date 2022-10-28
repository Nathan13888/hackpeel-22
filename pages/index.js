import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import DateCounter from "../components/DateCounter"
import TeamSection from "../components/TeamSection"
import SponsorsSection from "../components/SponsorsSection"

export default function Home() {
  return (
    <Layout name="Home">
      <Hero />
      <DateCounter />
      <TeamSection />
      <SponsorsSection />
    </Layout>
  )
}
