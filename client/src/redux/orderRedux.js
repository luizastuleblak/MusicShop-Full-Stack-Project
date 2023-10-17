import { v4 as uuidv4 } from 'uuid';

export const getOrder = ({ order }) => order.products;

const createActionName = actionName => `app/cart/${actionName}`;

const ADD_ORDER = createActionName('ADD_ORDER');

export const addOrder = (order) => {
	return {
		type: ADD_ORDER,
		payload: {
			id: uuidv4(),
			...order,
		},
	};
};

const orderReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_ORDER:
			return { ...statePart, ...action.payload };
		default:
			return statePart;
	};
};

export default orderReducer;