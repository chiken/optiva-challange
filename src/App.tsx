import {
	Routes,
	Route
} from "react-router-dom";

import { Home, MovieDetail } from './pages'
import { LayoutComponent } from './components/LayoutComponnet'

function App() {
    return (
		<Routes>
				<Route element={<LayoutComponent/>}>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<MovieDetail />} />
				</Route>
		</Routes>
    )
}

export default App
