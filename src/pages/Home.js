import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { Profile } from "./Profile";
import { Navbar } from "../components/Navbar";
import { GenerateCatFact } from "../components/GenerateCatFact";
import { AgePredicter } from "../components/AgePredicter";
export const HomeContext = createContext();

export const Home = () => {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const [username, setUsername] = useState("Tony");
	return (
		<>
			<HomeContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar />
					<h2>Username : {username}</h2>
					<Routes>
						<Route path='/profile' element={<Profile />} />
					</Routes>
					<QueryClientProvider client={client}>
						<GenerateCatFact />
						<AgePredicter />
					</QueryClientProvider>
				</Router>
			</HomeContext.Provider>
		</>
	);
};
