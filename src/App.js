import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState("Tony learn react");
	return (
		<div className='App'>
			<AppContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='*' element={<h1>Page not Found</h1>} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
