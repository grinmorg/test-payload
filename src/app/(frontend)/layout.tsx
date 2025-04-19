import React from 'react'
import './styles.css'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main className="relative">
          {children}

          <AnimatedGridPattern
            height={40}
            width={40}
            className="fixed inset-0 object-cover -z-10 opacity-30 skew-y-6 text-primary"
          />
        </main>
      </body>
    </html>
  )
}
