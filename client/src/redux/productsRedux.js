export const getProducts = ({ products }) => products;
export const getProductById = ({ products }, id) => products.find(product => product.id === id);

const createActionName = actionName => `app/products/${actionName}`;

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

const productsReducer = (statePart = [], action) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return [...action.payload];
		default:
			return statePart;
	};
};

export default productsReducer;