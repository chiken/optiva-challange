import { Outlet, useLocation } from "react-router-dom";

import { NavbarComponent, SearchInputComponent } from "./index";

export const LayoutComponent = (): JSX.Element => {
	const location = useLocation();
	const isHomPage = location.pathname.split("/").length === 2;

	return (
		<div className="app">
			<NavbarComponent />

			<div className="container pt-3">
				{isHomPage && (
					<div className="row d-block d-md-none">
						<SearchInputComponent />
					</div>
				)}
				<Outlet />
			</div>
		</div>
	);
};
