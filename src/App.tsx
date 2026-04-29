import { useEffect, useState } from 'react'
import Header from './components/header'
import HomePage from './views/homepage'
import GameDetailPage from './views/game-detail-page'
import { getGameBySlug } from './data/games'

const HOME_HASH = '#/'

const getSlugFromHash = () => {
  const hash = window.location.hash || HOME_HASH
  const match = hash.match(/^#\/game\/([^/]+)$/)
  return match?.[1] ?? null
}

function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() => getSlugFromHash())

  useEffect(() => {
    const syncRoute = () => {
      setSelectedSlug(getSlugFromHash())
    }

    window.addEventListener('hashchange', syncRoute)

    if (!window.location.hash) {
      window.location.hash = HOME_HASH
    }

    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  const handleSelectGame = (slug: string) => {
    window.location.hash = `/game/${slug}`
  }

  const handleBackHome = () => {
    window.location.hash = HOME_HASH
  }

  const selectedGame = selectedSlug ? getGameBySlug(selectedSlug) : null

  return (
    <div className="w-full min-h-screen bg-[#1c1e25]">
      <Header />
      <main style={{ paddingTop: '64px', paddingBottom: '40px' }}>
        {selectedGame ? (
          <GameDetailPage game={selectedGame} onBack={handleBackHome} />
        ) : (
          <HomePage onSelectGame={handleSelectGame} />
        )}
      </main>
    </div>
  )
}

export default App
