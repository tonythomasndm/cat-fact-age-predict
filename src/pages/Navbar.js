import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
		<div>
			<Link to='/'>Home{"\t\t"}</Link>
			<Link to='/profile'>Profile{"\t\t"}</Link>
			<Link to='/contact'>Contact{"\t\t"}</Link>
		</div>
	);
};
