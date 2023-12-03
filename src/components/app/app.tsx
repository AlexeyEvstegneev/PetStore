import { useEffect, useState } from 'react';
import Header from '../header/header';
import HomePage from '../pages/home-page/home-page';
import { IProduct } from '../interface';
import Footer from '../footer';
import './app.css';
import { products } from '../../productsAll';

const productsAll = products.map((product, index) => ({
	...product,
	id: index + 1,
}));
const App = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		setProducts(productsAll);
	}, [products]);

	return (
		<>
			<Header />
			<HomePage products={products} />
			<Footer />
		</>
	);
};
export default App;
