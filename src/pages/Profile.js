import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
export const Profile = () => {
	const { username } = useContext(AppContext);
	return (
		<>
			<ChangeProfile />
			<h1>Profile : {username}</h1>;
		</>
	);
};
