import logo from "../assets/logo.jpeg";
import { useLocation } from "react-router-dom";

import { SearchInputComponent } from "./index";

export function NavbarComponent(): JSX.Element {
	const location = useLocation();
	const isHomPage = location.pathname.split("/").length === 2;

	return (
		<nav className="navbar">
			<a
				className="navbar-brand d-flex align-items-center"
				href="https://www.optivamedia.com/"
				rel="noreferrer"
				target="_blank"
			>
				<img className="navbar-logo" src={logo} alt="" />
				<h2 className="m-0"> Optiva Media </h2>
			</a>
			<div className="d-none d-md-block">
				{isHomPage && <SearchInputComponent />}
			</div>
		</nav>
	);
}
