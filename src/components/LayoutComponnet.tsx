import { Outlet } from "react-router-dom";
import { NavbarComponent, SearchInputComponent } from "./index";

export const LayoutComponent = () => {
	return (
		<div className="app">
			<NavbarComponent />

			<div className="container pt-3">
				<div className="row d-block d-md-none">
					<SearchInputComponent />
				</div>
				<Outlet />
			</div>
		</div>
	);
};
