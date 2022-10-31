import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import DateCounter from "../components/DateCounter"
import TeamSection from "../components/TeamSection"
import SponsorsSection from "../components/SponsorsSection"
import AboutSection from "../components/AboutSection"
import FAQSection from "../components/FAQSection"
import FAQ from "../components/Home/FAQ"
import RegisterToday from "../components/Home/RegisterToday"

import { getDocumentsProps } from "../lib/sanity/util"

export function getStaticProps() {
  return getDocumentsProps("team", true)
}

export default function Home({ documentsRaw }) {
  // TODO: Refactor this once we add sponsors to CMS
  const team = documentsRaw;

  console.log(team)

  return (
    <Layout name="Home">
      <Hero />
      <AboutSection />
      {/* <FAQSection /> */}
      <FAQ />
      <TeamSection team={team} />
      <SponsorsSection />
      <RegisterToday />
    </Layout>
  )
}
