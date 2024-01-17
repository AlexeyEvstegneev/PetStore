import { createContext } from 'react';
import { IProduct } from '../interface';

export interface ProductsContextInterface {
	product?: IProduct[];
	setPage: (value: ((prevState: number) => number) | number) => void | null;
	page: number;
	totalPage?: number;
}

export const ProductsContext = createContext<ProductsContextInterface | null>(
	null
);

ProductsContext.displayName = 'ProductsContext';
