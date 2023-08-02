import { useContext, useState } from "react";
import { HomeContext } from "./Home";
import { Link } from "react-router-dom";
export const Profile = () => {
	const [showCUD, setShowCUD] = useState(true);
	const [showSUD, setShowSUD] = useState(false);
	const [newUsername, setNewUsername] = useState("");
	const { username, setUsername } = useContext(HomeContext);

	return (
		<>
			{showCUD && (
				<button
					onClick={() => {
						setShowCUD(false);
						setShowSUD(true);
					}}>
					Change Username
				</button>
			)}
			<br />
			{showSUD && (
				<>
					<input
						type='text'
						placeholder={username}
						onChange={(event) => {
							setNewUsername(event.target.value);
						}}
					/>
					<Link to='/'>
						<button
							onClick={() => {
								setShowCUD(true);
								setShowSUD(false);
								setUsername(newUsername);
							}}>
							Set New Username
						</button>
					</Link>
				</>
			)}
		</>
	);
};
