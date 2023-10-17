import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ProductBox.module.scss';

const ProductBox = ({ name, price, images, id }) => {
	const imagesArr = images.split(", ");

	return (
		<Card className={`col-4 m-2 ${styles.product_box}`} style={{ width: "26.5rem" }}>
			<Card.Img className={styles.image} src={`/uploads/${imagesArr[0]}`} alt={name} />
			<Card.Body className={styles.card_body}>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle>from {price} $</Card.Subtitle>
				<Link to={`/products/${id}`}><Button className="mt-2" variant="outline-dark">Read more</Button></Link>
			</Card.Body>
		</Card>
	)
}

export default ProductBox;