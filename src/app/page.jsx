import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { ContactUs } from '@/components/ContactUs'
import Hero from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Screencasts } from '@/components/Screencasts'
import { AccreditedSchools } from '@/components/AccreditedSchools'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
     
      <NavBar />
      <Hero />
      <AccreditedSchools />
      <Screencasts />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
