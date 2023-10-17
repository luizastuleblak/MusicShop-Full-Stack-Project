import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Product from './components/features/Product/Product';
import Cart from './components/features/Cart/Cart';
import Order from './components/features/Order/Order';
import About from './components/pages/About/About';
import SuccessOrder from './components/views/SuccessOrder/SuccessOrder';

const App = () => {
	return (
		<MainLayout>
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products/:id' element={<Product />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<Order />} />
					<Route path='/successorder' element={<SuccessOrder />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>
		</MainLayout>
	)
}

export default App;