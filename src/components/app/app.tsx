import { useEffect, useState } from 'react';
import Header from '../header/header';
import HomePage from '../pages/home-page/home-page';
import { IProduct, User } from '../interface';
import Footer from '../footer';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import NotFoundPage from '../pages/not-found';
import Profile from '../pages/profile';
import { ProductsContext } from '../context/productContext';
import SingleProductPage from '../single-card/single-product-page';
import api from '../utils/api';
import Favorites from '../pages/favorites/favorites';
import { UserContext } from '../context/user-context';

interface AllProducts {
	total: number;
	products: IProduct[];
}
const PER_PAGE = 12;
const App = () => {
	const [products, setProducts] = useState<AllProducts | null>(null);
	const [search, setSearch] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		api.getUserInfo().then((user) => setUser(user));
	}, []);

	useEffect(() => {
		api
			.getAllProducts({ query: search, page, limit: PER_PAGE })
			.then((dataProducts) => setProducts(dataProducts));
	}, [page]);

	const productContext = products
		? {
				product: products.products,
				setPage,
				page,
				totalPage: products.total / PER_PAGE,
		  }
		: null;
	console.log('user', user);

	return (
		<UserContext.Provider value={user}>
			<ProductsContext.Provider value={productContext}>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route
						path='/productCard/:productId'
						element={<SingleProductPage />}
					/>
					<Route path='/profile' element={<Profile />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</ProductsContext.Provider>
		</UserContext.Provider>
	);
};
export default App;
