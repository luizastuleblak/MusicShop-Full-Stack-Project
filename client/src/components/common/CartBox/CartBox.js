import { Row, Col, Button, Modal } from 'react-bootstrap';
import styles from './CartBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { removeProduct } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const CartBox = ({ idCart, name, price, images, count, note }) => {
	const dispatch = useDispatch();

	const imagesArr = images.split(", ");

	const totalPrice = price * count;

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleRemoveProduct = e => {
		e.preventDefault();
		dispatch(removeProduct(idCart));
		handleClose();
	};

	return (
		<div className={`${styles.cart_box} mt-3`}>
			<Row>
				<Col className="col-1"><img className={styles.image} src={`/uploads/${imagesArr[0]}`} alt={name} /></Col>
				<Col className={`col-4 mt-4 ${styles.product_name}`}><h2>{name}</h2></Col>
				<Col className="col-1 mt-4"><h5>{price} $</h5></Col>
				<Col className="col-1 mt-4"><h5 className={styles.input_count}>{count}</h5></Col>
				<Col className={`col-1 mt-4 ${styles.total_price}`}><h4>{totalPrice} $</h4></Col>
				<Col className="mt-4 mx-3" align="end"><Button variant="dark-outline" onClick={handleShow}><FontAwesomeIcon className={styles.icon} icon={faCircleXmark}></FontAwesomeIcon></Button></Col>
			</Row>
			{note && <p className={styles.note}>{note}</p>}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					This operation will completely remove this post from the app.<br></br>
					Are you sure you want to do that?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleRemoveProduct}>Remove</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default CartBox;