import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import DateCounter from "../components/DateCounter"
import TeamSection from "../components/TeamSection"
import SponsorsSection from "../components/SponsorsSection"
import AboutSection from "../components/AboutSection"
import FAQSection from "../components/FAQSection"

export default function Home() {
  return (
    <Layout name="Home">
      <Hero />
      <AboutSection />
      <DateCounter />
      <FAQSection />
      <TeamSection />
      <SponsorsSection />
    </Layout>
  )
}
