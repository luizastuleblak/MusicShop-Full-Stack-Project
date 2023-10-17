import { Row, Col } from 'react-bootstrap';
import styles from './OrderBox.module.scss';

const OrderBox = ({ name, price, images, count, note }) => {
	const imagesArr = images.split(", ");

	const totalPrice = price * count;

	return (
		<div className={`${styles.order_box} mt-3`}>
			<Row>
				<Col className="col-1"><img className={styles.image} src={`/uploads/${imagesArr[0]}`} alt={name} /></Col>
				<Col className={`col-4 mt-4 ${styles.product_name}`}><h2>{name}</h2></Col>
				<Col className="col-1 mt-4">{count}</Col>
				<Col className="col-1 mt-4"><h4>{totalPrice} $</h4></Col>
				<Col className={`col-5 mt-4 ${styles.note}`}>{note}</Col>
			</Row>
		</div>
	);
};

export default OrderBox;