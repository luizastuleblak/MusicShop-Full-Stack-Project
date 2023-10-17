import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { Col, Row, Button } from 'react-bootstrap';
import styles from './Product.module.scss';
import { useState } from 'react';
import { addProduct } from '../../../redux/cartRedux';

const Product = () => {

	const dispatch = useDispatch();

	const { id } = useParams();
	const product = useSelector(state => getProductById(state, id));

	const imagesArr = product.images.split(", ");

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [count, setCount] = useState(1);
	const [note, setNote] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addProduct(product, { count, note }));
		setCount(1);
		setNote('');
	}

	if (count < 1) {
		setCount(1);
	}

	if (count > 999) {
		setCount(999);
	}

	if (!product) return <Navigate to='/' />
	else return (
		<div className="mt-5">
			<h1 align="center">{product.name}</h1>

			<Row className="mt-4">
				<Col>
					<img
						src={`/uploads/${imagesArr[currentImageIndex]}`}
						className={styles.image} alt="product"
					/>
					<Row>
						{imagesArr.map((img, index) => (
							<Col className="col-2" key={index}>
								<img
									src={`/uploads/${img}`}
									className={`${styles.image} ${styles.images} ${index === currentImageIndex ? styles.active : ''}`}
									style={{ width: "80px", height: "80px" }}
									alt="product"
									onClick={() => setCurrentImageIndex(index)}
								/>
							</Col>
						))}
					</Row>
				</Col>

				<Col className={styles.product_body}>
					<div className={styles.price}>
						<p className={styles.price_inner}>{product.price} $</p>
					</div>
					<p className={styles.content}>{product.content}</p>
					<div align="end" className={styles.button}>
						<textarea className={styles.note} value={note} onChange={e => setNote(e.target.value)}></textarea>
						<input type='number' value={count} onChange={e => setCount(e.target.value)}></input>
						<Button variant="btn btn-outline-dark" onClick={handleSubmit}>Add to cart</Button>
					</div>
				</Col>
			</Row>

		</div>
	);
};

export default Product;