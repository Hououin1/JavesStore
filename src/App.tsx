import { useEffect, useState } from 'react'
import Header from './components/header'
import HomePage from './views/homepage'
import GameDetailPage from './views/game-detail-page'
import PaymentPage from './views/payment-page'
import { getGameBySlug } from './data/games'
import type { PendingPayment } from './types/payment'

const HOME_HASH = '#/'
const PAYMENT_STORAGE_KEY = 'pending-payment'

const getRouteState = () => {
  const hash = window.location.hash || HOME_HASH
  const gameMatch = hash.match(/^#\/game\/([^/]+)$/)
  const paymentMatch = hash.match(/^#\/payment\/([^/]+)$/)

  return {
    gameSlug: gameMatch?.[1] ?? null,
    paymentSlug: paymentMatch?.[1] ?? null,
  }
}

function App() {
  const [routeState, setRouteState] = useState(() => getRouteState())
  const [pendingPayment, setPendingPayment] = useState<PendingPayment | null>(() => {
    const savedPayment = window.sessionStorage.getItem(PAYMENT_STORAGE_KEY)

    if (!savedPayment) {
      return null
    }

    try {
      return JSON.parse(savedPayment) as PendingPayment
    } catch {
      return null
    }
  })

  useEffect(() => {
    const syncRoute = () => {
      setRouteState(getRouteState())
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

  const handleStartPayment = (payment: PendingPayment) => {
    setPendingPayment(payment)
    window.sessionStorage.setItem(PAYMENT_STORAGE_KEY, JSON.stringify(payment))
    window.location.hash = `/payment/${payment.gameSlug}`
  }

  const selectedGame = routeState.gameSlug ? getGameBySlug(routeState.gameSlug) : null
  const activePayment =
    routeState.paymentSlug && pendingPayment?.gameSlug === routeState.paymentSlug
      ? pendingPayment
      : null

  return (
    <div className="w-full min-h-screen bg-[#1c1e25]">
      <Header />
      <main style={{ paddingTop: '64px', paddingBottom: '40px' }}>
        {activePayment ? (
          <PaymentPage payment={activePayment} />
        ) : selectedGame ? (
          <GameDetailPage game={selectedGame} onBack={handleBackHome} onStartPayment={handleStartPayment} />
        ) : (
          <HomePage onSelectGame={handleSelectGame} />
        )}
      </main>
    </div>
  )
}

export default App
