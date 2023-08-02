import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
export const AgePredicter = () => {
	const [name, setName] = useState("");
	const { data, isLoading, isError, refetch } = useQuery(
		["agePrediction"],
		() => {
			return Axios.get(`https://api.agify.io/?name=${name}`).then(
				(response) => response.data
			);
		}
	);
	if (isLoading) return <h1>Loading ...</h1>;
	if (isError) return <h1>Error in system</h1>;
	return (
		<>
			<br />
			<br />
			<h1>Age Prediction</h1>
			<br />
			<input
				type='text'
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<button onClick={refetch}>Set Name</button>

			<h2>Name :{data?.name}</h2>
			<h2>Age :{data?.age}</h2>
			<h2>Count :{data?.count}</h2>
		</>
	);
};
