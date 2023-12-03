import React, { ChangeEvent } from 'react';
import usePagination from '../hook/usePagination';
import { IProduct } from '../interface';
import {  Grid } from '@mui/material';
import ProductCard from '../product-card';
import PaginationUse from '../pagination/pagination';

interface IProductListProps {
	products: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
	const PER_PAGE = 12;
	const { currentPage, getCurrentData, setPagePaginate, countPage } =
		usePagination<IProduct>(products, PER_PAGE);
	function handlePageChange(e: ChangeEvent<unknown>, page: number) {
		setPagePaginate(page);
	}
	return (
		<>
			<Grid container spacing={2}>
				{getCurrentData().map((product) => (
					<Grid
						key={product.id}
						item
						sx={{ display: 'flex' }}
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<ProductCard {...product} />
					</Grid>
				))}
			</Grid>
			<PaginationUse
				countPage={countPage}
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
		</>
	);
};
export default ProductList;
