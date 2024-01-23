import { fetchDatabase } from '@/apis/notion'
import Article from './components/Article/Article'
import Logo from './components/Logo/Logo'

export default async function HomePage() {
  const cards = await fetchDatabase()

  return (
    <>
      <Logo />

      <main>
        <Article.Container>
          {cards && cards.map(card => <Article key={card.id} article={card} />)}
        </Article.Container>
      </main>
    </>
  )
}
