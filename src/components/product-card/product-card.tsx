import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export function FireIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path
				d='M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z'
				fill='#000'></path>
		</SvgIcon>
	);
}

interface ProductProps {
	pictures: string;
	available?: boolean;
	discount: number;
	stock?: number;
	price: number;
	wight?: string;
	name: string;
	// like: boolean;
	id: string;
}

export const ProductCard = (props: ProductProps) => {
	const { pictures, discount, price, name, wight, id } = props;
	const location = useLocation();

	return (
		<>
			<div className='cards content__cards'>
				<div className='card'>
					<div className='card__sticky card__sticky_type_top-left'>
						<span className='card__discount'>{discount}%</span>
					</div>
					<div className='card__sticky card__sticky_type_top-right'>
						<button className='card__favorite card__favorite_is-active'></button>
					</div>
					<Link
						className='card__link'
						to={`/productCard/${id}`}
						state={location}>
						<img src={pictures} alt='' className='card__image' loading='lazy' />
						<div className='card__desc'>
							<div className='price-small price-wrap'>
								<span className='price_discount price'>{price}&nbsp;₽</span>
							</div>
							<span className='card__wight'>{wight}</span>
							<h3 className='card__name'>{name}</h3>
						</div>
					</Link>
					<Link
						to={'/'}
						className='card__cart card__btn card__btn_type_primary'>
						В корзину
					</Link>
				</div>
			</div>
		</>
	);
};
export default ProductCard;
