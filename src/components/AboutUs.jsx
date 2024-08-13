import Link from 'next/link'

import { SectionHeading } from '@/components/SectionHeading'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
  
export default function AboutUs() {
  return (
    <section
      id="about-us"
      aria-label="about-us"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
      <SectionHeading number="1" id="about-us-title">
          About Us
        </SectionHeading>
        <p className="mt-4">
        At ExpertTranscriptHelper, we assist students in earning credits for their degrees at the University of the People or any Accredited University accepting ACE credits by helping them take courses on platforms like Coursera and Sophia Learning.
        </p>
        <p className="mt-4">
        Our services include taking all required exams on your behalf, ensuring you meet your degree requirements efficiently.
        </p>
        <p className="mt-4">
        Earn up to 60 elective credits from Coursera and 30 main and general education credits from Sophia Learning, all seamlessly integrated into your academic journey.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Using boolean operations to combine basic shapes into complex icons',
            'How to adapt icons to different sizes',
            'Translating icons from an outline style to a solid style',
            'Identifying the characteristics that make an icon set cohesive',
            'Figma features and keyboard shortcuts to speed up your workflow',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the book, you’ll have all the confidence you need to dig
          in and start creating beautiful icons that can hold their own against
          any of the sets you can find online.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
