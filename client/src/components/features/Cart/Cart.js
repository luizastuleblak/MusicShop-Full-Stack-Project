import { useSelector } from "react-redux";
import { getCart } from "../../../redux/cartRedux";
import CartBox from "../../common/CartBox/CartBox";
import { Row, Col, Button } from "react-bootstrap";
import styles from './Cart.module.scss';
import { Link } from "react-router-dom";

const Cart = () => {
	const dataCart = useSelector(getCart);

	if (dataCart.length === 0) return (
		<div className="mt-5" align="center">
			<h1>Your cart is empty</h1>
		</div>
	)
	return (
		<div>
			<Row className={styles.topic}>
				<Col className="col-4 mt-4" md={{ span: 1, offset: 1 }}><p>Product</p></Col>
				<Col className="col-1 mt-4" md={{ span: 1, offset: 3 }}><p>Price</p></Col>
				<Col className="col-1 mt-4"><p>Count</p></Col>
				<Col className="col-1 mt-4"><p>Total price</p></Col>
			</Row>

			<div>
				{dataCart.map(cart => (<CartBox key={cart.id} {...cart} />))}
				<div align="end">
					<Link to="/order">
						<Button className={`${styles.button} my-3 mx-3`} variant="success">Order</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;