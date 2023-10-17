import { Spinner } from "react-bootstrap"

const Loader = () => {
	return (
		<div className="text-center mt-4">
			<Spinner color="secondary"></Spinner>
		</div>
	);
};

export default Loader;