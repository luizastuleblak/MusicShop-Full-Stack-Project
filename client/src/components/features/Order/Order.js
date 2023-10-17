import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from './Order.module.scss';
import OrderBox from "../../common/OrderBox/OrderBox";
import { getCart } from "../../../redux/cartRedux";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { addOrder } from "../../../redux/orderRedux";

const Order = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const dataOrder = useSelector(getCart);

	const totalAmount = dataOrder.reduce((sum, order) => sum + order.price * order.count, 0)

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

	const { register, handleSubmit: validate, formState: { errors } } = useForm();

	const handleSubmit = (data) => {
		const orderData = {
			products: dataOrder,
			name: data.name,
			surname: data.surname,
			phone: data.phone,
			email: data.email,
			address: data.address,
			totalAmount: totalAmount,
		};

		dispatch(addOrder(orderData));
		navigate('/successorder');
	};

	if (dataOrder.length === 0) return <Navigate to="/" />
	return (
		<div>
			<Row className={styles.topic}>
				<Col className="col-4 mt-4" md={{ span: 1, offset: 1 }}><p>Product</p></Col>
				<Col className="col-1 mt-4" md={{ span: 1, offset: 3 }}><p>Count</p></Col>
				<Col className="col-1 mt-4"><p>Total price</p></Col>
				<Col className="col-1 mt-4"><p>Note</p></Col>
			</Row>

			<div>
				{dataOrder.map(order => <OrderBox key={order.id} {...order} />)}
				<div className={styles.total_amount} align='center'>
					<p>Total amount: {totalAmount} $</p>
				</div>

				<Row className="mt-4">
					<Col md={{ span: 8, offset: 2 }} className='col-10'>
						<Form onSubmit={validate(handleSubmit)}>

							<h1 className='my-4'>Contact details</h1>

							<Form.Group className='mb-3' controlId="formName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									{...register("name", { required: true, minLength: 3 })}
									type="text"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
								{errors.name && <small className="d-block form-text text-danger mt-2">This field is too short (min is 3)</small>}
							</Form.Group>

							<Form.Group className='mb-3' controlId="formSurname">
								<Form.Label>Surname</Form.Label>
								<Form.Control
									{...register("surname", { required: true, minLength: 3 })}
									type="text"
									value={surname}
									onChange={e => setSurname(e.target.value)}
								/>
								{errors.surname && <small className="d-block form-text text-danger mt-2">This field is too short (min is 3)</small>}
							</Form.Group>

							<Form.Group className='mb-3' controlId="formPhone">
								<Form.Label>Phone number</Form.Label>
								<Form.Control
									{...register("phone", { required: true })}
									type="tel"
									value={phone}
									onChange={e => setPhone(e.target.value)}
								/>
								{errors.phone && <small className="d-block form-text text-danger mt-2">This field is required</small>}
							</Form.Group>

							<Form.Group className='mb-3' controlId="formEmail">
								<Form.Label>E-mail</Form.Label>
								<Form.Control
									{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								{errors.email && <small className="d-block form-text text-danger mt-2">Please enter a valid email address</small>}
							</Form.Group>

							<Form.Group className='mb-3' controlId="formAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control
									{...register("address", { required: true })}
									type="text"
									value={address}
									onChange={e => setAddress(e.target.value)}
								/>
								{errors.address && <small className="d-block form-text text-danger mt-2">This field is required</small>}
							</Form.Group>

							<div align="end">
								<Button className={`${styles.button} my-3 mx-3`} variant="success" type="submit">Order</Button>
							</div>
						</Form>
					</Col>
				</Row>

			</div>
		</div>
	);
};

export default Order;