import Products from "../../features/Products/Products";
import Gallery from "../../views/Gallery/Gallery";
import Concert from "../../views/Concert/Concert";

const Home = () => {
	return (
		<div>
			<Concert />
			<Products />
			<Gallery />
		</div>
	);
};

export default Home;