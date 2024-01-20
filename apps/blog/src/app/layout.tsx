import '@/styles/main.scss'

import type { Metadata } from 'next'
import { Vibur } from 'next/font/google'
import localFont from 'next/font/local'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import Footer from '@/components/Footer/Footer'

const vibur = Vibur({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vibur',
})

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'fallback',
})

export const metadata: Metadata = {
  title: 'Julog',
  description: '연주의 기술 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${vibur.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
