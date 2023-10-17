import { v4 as uuidv4 } from 'uuid';

export const getCart = ({ cart }) => cart.products;

const createActionName = actionName => `app/cart/${actionName}`;

const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

export const addProduct = (product, count, note) => ({ payload: { product, count, note }, type: ADD_PRODUCT });
export const removeProduct = payload => ({ type: REMOVE_PRODUCT, payload });

const cartReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return { ...statePart, products: [...statePart.products, { ...action.payload.product, ...action.payload.count, ...action.payload.note, idCart: uuidv4() }] };
		case REMOVE_PRODUCT:
			return {
				...statePart,
				products: statePart.products.filter(product => product.idCart !== action.payload),
			};
		default:
			return statePart;
	};
};

export default cartReducer;