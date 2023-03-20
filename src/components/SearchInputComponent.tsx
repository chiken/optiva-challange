import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { type MovieState } from "../types";
import { setSearchQuery } from "../redux/actions/movieActions";

export const SearchInputComponent = (): JSX.Element => {
	const dispatch = useDispatch();
	const query = useSelector((state: MovieState) => state.query);
	const [searchParams, setSearchParams] = useSearchParams();

	let timeout: ReturnType<typeof setTimeout> | undefined;

	const handleDebounce = (event: React.KeyboardEvent): void => {
		if (query !== (event.target as HTMLInputElement).value) {
			if (timeout !== undefined) clearTimeout(timeout);
			timeout = setTimeout(() => {
				searchParams.delete("q");
				setSearchParams({
					q: (event.target as HTMLInputElement).value,
				});
				dispatch(
					setSearchQuery((event.target as HTMLInputElement).value)
				);
			}, 500);
		}
	};

	return (
		<div className="form-inline px-5">
			<input
				className="form-control shadow-sm search-input"
				type="search"
				placeholder={query.length > 0 ? query : "Search"}
				aria-label="Search"
				onChange={() => handleDebounce}
				onKeyDown={handleDebounce}
			/>
		</div>
	);
};
