import '@/styles/main.scss'

import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Favicon from '../../public/favicon.ico'

const notoSerif = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'block',
})

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yeonble',
  description: '연블의 기술 블로그',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSerif.variable} ${pretendard.variable}`}>
      <body
        style={{
          position: 'relative',
          backgroundColor: '#fafafa',
          minHeight: '100vh',
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
