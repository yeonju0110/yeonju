import { fetchDatabase } from '@/apis/notion'
import Header from '@/components/Header/Header'
import Article from './components/Article/Article'
import Logo from './components/Logo/Logo'

export default async function HomePage() {
  const cards = await fetchDatabase()

  return (
    <>
      <Header />
      <Logo />

      <main>
        <Article.Container>
          {cards && cards.map(card => <Article key={card.id} article={card} />)}
        </Article.Container>
      </main>
    </>
  )
}
