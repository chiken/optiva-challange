import * as React from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import { Home, MovieDetail } from './pages'

function App() {
  
    return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    )
}

// TODO: Extracto <Header> and <Footer> to improve reuzability

export default App
