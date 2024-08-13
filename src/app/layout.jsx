import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'ExpertTranscriptHelper | Earn UoPeople Credits',
  description:
    'Let us take your Sophia Learning and Coursera courses for you. ExpertTranscriptHelper provides a streamlined process for busy adults.',
    keywords: 'transcript help, UoPeople credits, online learning assistance',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
        <title>{metadata.title}</title> 
        <meta name="description" content={metadata.description} />
        </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
