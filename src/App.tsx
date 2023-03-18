import {
	Routes,
	Route
} from "react-router-dom";

import { Home, MovieDetail } from './pages'
import { Layout } from './components/Layout'

function App() {
    return (
		<Routes>
				<Route element={<Layout/>}>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<MovieDetail />} />
				</Route>
		</Routes>
    )
}

export default App
