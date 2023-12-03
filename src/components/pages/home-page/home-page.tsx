import React, { ChangeEvent, useEffect, useState } from 'react';
import { IProduct } from '../../interface';
import ProductList from '../../product-list';
import '../../all.css';
import SearchInput from '../../search/searchInput';
import SortOptions from '../../sort/sortOptions';
interface IHomePageProps {
	products: IProduct[];
}
const HomePage: React.FC<IHomePageProps> = ({ products }) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [sortedProducts, setSortedProducts] = useState(products);
	const [sortMethod, setSortMethod] = useState('lowToHigh');

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};
	useEffect(() => {
		const filteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setSortedProducts(filteredProducts);
	}, [products, searchTerm]);

	const handleSortChange = (method: any) => {
		setSortMethod(method);
	};

	useEffect(() => {
		const sorted = [...products];
		switch (sortMethod) {
			case 'lowToHigh':
				sorted.sort((a, b) => a.price - b.price);
				break;
			case 'highToLow':
				sorted.sort((a, b) => b.price - a.price);
				break;
			case 'discount':
				sorted.sort((a, b) => b.discount - a.discount);
				break;
			default:
				break;
		}
		setSortedProducts(sorted);
	}, [products, sortMethod]);
	return (
		//style='background-color: rgb(255, 255, 255);'
		<main className='main'>
			<div className='content container'>
				<SearchInput
					searchTerm={searchTerm}
					handleSearchChange={handleSearchChange}
				/>

				<h1 className='header-title'>Каталог</h1>
				<SortOptions handleSortChange={handleSortChange} />

				<div className='cards content__cards'></div>
				<ProductList products={sortedProducts} />
			</div>
		</main>
	);
};
export default HomePage;
