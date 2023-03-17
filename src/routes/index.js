import { Routes as Router, Route } from 'react-router-dom'
import { lazy } from 'react'

import Suspense from '../pages/suspense/Suspense'
import MainPage from '../pages/mainPage/MainPage'

const MoviePage = lazy(() => import('../pages/moviePage/MoviePage'))
const NotFound = lazy(() => import('../pages/notFound/NotFound'))

function Routes () {
  return (
    <Router>
      <Route path='/' element={<Suspense><MainPage /></Suspense>} />

      <Route
        path='movies/:movieId'
        element={<MoviePage />}
      />

      <Route
        path='*'
        element={<NotFound />}
      />
    </Router>
  )
}

export default Routes
