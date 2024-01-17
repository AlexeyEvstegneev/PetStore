import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import ProductCard from '../product-card';
import PaginationUse from '../pagination/pagination';
import {
	ProductsContext,
	ProductsContextInterface,
} from '../context/productContext';

const ProductList: React.FC = () => {
	const products = useContext(ProductsContext) as ProductsContextInterface;
	const { product, page, setPage, totalPage } = products;
	if (!products || !products.product) {
		return null;
	}
	
	return (
		<>
			<Grid container spacing={2}>
				{product &&
					product.map((prod) => (
						<Grid
							key={prod._id}
							item
							sx={{ display: 'flex' }}
							xs={12}
							sm={6}
							md={4}
							lg={3}>
							<ProductCard
								pictures={prod.pictures}
								discount={prod.discount}
								price={prod.price}
								name={prod.name}
								wight={prod.wight}
								id={prod._id}
							/>
						</Grid>
					))}
			</Grid>
			<Pagination
				count={totalPage}
				size='small'
				page={page}
				onChange={(e, page) => setPage(page)}
			/>
		</>
	);
};
export default ProductList;
