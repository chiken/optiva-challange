import { type PillProps } from "../types";

export const PillComponent = ({ id, name }: PillProps): JSX.Element => {
	return <span className="pill">{name}</span>;
};
