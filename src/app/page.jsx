import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { HowItWorks } from '@/components/HowItWorks'
import { AccreditedSchools } from '@/components/AccreditedSchools'
import Contact from '@/components/Contact'
import YoutubeSection from '@/components/YoutubeSection'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AccreditedSchools />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <YoutubeSection />
      <Footer />
    </>
  )
}
