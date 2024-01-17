import React, { useContext } from 'react';

import ProductList from '../../product-list';
import '../../all.css';

import {
	ProductsContext,
	ProductsContextInterface,
} from '../../context/productContext';

const HomePage: React.FC = ({}) => {
	const products = useContext(ProductsContext) as ProductsContextInterface;
	if (!products || !products.product) {
		return null;
	}
	const { product, page, setPage, totalPage } = products;

	return (
		<main className='main'>
			<div className='content container'>
				<div className='cards content__cards'></div>
				<ProductList />
			</div>
		</main>
	);
};
export default HomePage;
