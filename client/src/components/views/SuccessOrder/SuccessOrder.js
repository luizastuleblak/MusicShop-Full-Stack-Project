import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SuccessOrder = () => {
	return (
		<div className="mt-5" align="center">
			<h1>Thank you for your order !</h1>
			<div className="mt-5" align="center">
				<Link to="/"><Button variant="dark">Back to home page</Button></Link>
			</div>
		</div>
	);
};

export default SuccessOrder;