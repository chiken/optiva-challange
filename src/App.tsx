import { Routes, Route, Navigate } from "react-router-dom";

import { MovieContainer, MovieDetailContainer } from "./containers";
import { LayoutComponent } from "./components/LayoutComponnet";

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="movies/*" element={<LayoutComponent />}>
				<Route index element={<MovieContainer />} />
				<Route path=":id" element={<MovieDetailContainer />} />
			</Route>

			<Route path="*" element={<Navigate to="/movies" />} />
		</Routes>
	);
}

export default App;
