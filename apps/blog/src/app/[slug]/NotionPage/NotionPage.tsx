'use client'

import dynamic from 'next/dynamic'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import Head from './components/Head'
import useNotionPage from './hooks/useNotionPage'
import styles from './NotionPage.module.scss'

interface Props {
  recordMap: ExtendedRecordMap
  currentPageId: string
}

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(m => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(m => m.Collection)
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(m => m.Equation)
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then(m => m.Modal),
  {
    ssr: false,
  }
)

export default function NotionPage({ recordMap, currentPageId }: Props) {
  const { thumbnailSrc } = useNotionPage(recordMap)

  return (
    <div className={styles.container}>
      <NotionRenderer
        pageHeader={
          <Head
            title={recordMap.block[currentPageId].value.properties.title[0][0]}
            thumbnailSrc={thumbnailSrc}
          />
        }
        recordMap={recordMap}
        darkMode
        components={{
          Collection,
          Code,
          Equation,
          Modal,
        }}
      />
    </div>
  )
}
