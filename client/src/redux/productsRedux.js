const reducerName = 'products';

const createActionName = name => `app/${reducerName}/${name}`;

const initialState = {
	data: [],
};

export default function reducer(statePart = initialState, action = {}) {
	switch (action.type) {
		default:
			return statePart;
	}
}