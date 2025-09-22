import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'

import LoadingPage from './components/LoadingPage'

const AppLayout = lazy(() => import('layouts/AppLayout'))
const HomePage = lazy(() => import('pages/HomePage'))
const CardPage = lazy(() => import('pages/games/CardPage'))
const MultiPlayerPage = lazy(() => import('pages/games/MultiPlayerPage'))
const QuotesPage = lazy(() => import('pages/QuotesPage'))

const AppRouter = () => {
  const location = useLocation()
  return (
    <Suspense fallback={<LoadingPage withBackground />}>
      <Routes location={location} key={location.key}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />}></Route>
          <Route path="home" element={<HomePage />} />
          <Route path="games">
            <Route index path="card" element={<CardPage />}></Route>
            <Route index path="multi" element={<MultiPlayerPage />}></Route>
          </Route>
          <Route path="quotes" element={<QuotesPage />} />
          <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Route>
        <Route path="/loading" element={<LoadingPage />}></Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
