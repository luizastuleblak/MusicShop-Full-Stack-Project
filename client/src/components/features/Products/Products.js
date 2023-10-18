/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../common/Loader/Loader';
import { Row } from "react-bootstrap";
import { API_URL } from "../../../config";
import { getProducts, loadProducts } from "../../../redux/productsRedux";
import ProductBox from "../../common/ProductBox/ProductBox";

const Products = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => fetchData(), []);

	function fetchData() {
		setLoading(true);
		fetch(API_URL + '/product')
			.then((res) => res.json())
			.then((products) => {
				dispatch(loadProducts(products));
				setLoading(false);
			});
	}

	const allProducts = useSelector(getProducts);

	if (loading) return <Loader />
	else return (
		<div className="mt-4">
			<Row align='center'>
				{allProducts.map(product => <ProductBox key={product.id} {...product} />)}
			</Row>
		</div>
	);
};

export default Products;