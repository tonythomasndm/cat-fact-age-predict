import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
export const GenerateCatFact = () => {
	const { data, isLoading, isError, refetch } = useQuery(["catFact"], () => {
		return Axios.get("https://catfact.ninja/fact").then(
			(response) => response.data
		);
	});
	if (isLoading) return <h1>Loading ...</h1>;
	if (isError) return <h1>Error in system</h1>;
	return (
		<>
			<h1>{data.fact}</h1>
			<button onClick={refetch}>Update Fact</button>
		</>
	);
};
