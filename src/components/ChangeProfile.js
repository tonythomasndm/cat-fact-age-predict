import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
export const ChangeProfile = () => {
	const { setUsername } = useContext(AppContext);
	const [newUsername, setNewUsername] = useState("");
	return (
		<>
			<input
				type='text'
				onChange={(event) => {
					setNewUsername(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					setUsername(newUsername);
				}}>
				Set new Username
			</button>
		</>
	);
};
