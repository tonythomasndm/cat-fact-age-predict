import { useContext } from "react";
import App, { AppContext } from "../App";
export const Home = () => {
	const { username } = useContext(AppContext);
	return <h1>This is Home Page{username}</h1>;
};
