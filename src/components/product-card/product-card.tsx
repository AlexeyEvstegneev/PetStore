import React from 'react';
import { IProduct } from '../interface';
import { SvgIcon, SvgIconProps } from '@mui/material';

// type IProducCardProps = {} & IProduct;

export function FireIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path
				d='M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z'
				fill='#000'></path>
		</SvgIcon>
	);
}

const ProductCard: React.FC<IProduct> = ({
	name,
	price,
	discount,
	wight,
	description,
	isFavorite,
	isCart,
	available,
	stock,
	picture,
	id,
}) => {
	return (
		<>
			<div className='cards content__cards'>
				<article className='card'>
					<div className='card__sticky card__sticky_type_top-left'>
						<span className='card__discount'>{discount}%</span>
						{/* <span className='tag tag_type_new'>new</span>
						<span className='tag tag_type_sale'>sale</span> */}
					</div>
					<div className='card__sticky card__sticky_type_top-right'>
						<button className='card__favorite card__favorite_is-active'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								className='card__favorite-icon'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 21C12.2115 21 12.5136 20.8627 12.7351 20.7353C18.4048 17.2059 22 13.098 22 8.92157C22 5.45098 19.5529 3 16.29 3C14.427 3 12.9164 3.86275 12 5.18627C11.1037 3.87255 9.57301 3 7.70997 3C4.44713 3 2 5.45098 2 8.92157C2 13.098 5.59517 17.2059 11.2749 20.7353C11.4864 20.8627 11.7885 21 12 21ZM12 19.3431C11.9597 19.3431 11.8892 19.2941 11.7986 19.2255C7.57905 16.5 3.62135 12.5686 3.62135 8.92157C3.62135 6.31373 5.35347 4.57843 7.68983 4.57843C9.58308 4.57843 10.6707 5.72549 11.3152 6.70588C11.5871 7.09804 11.7583 7.20588 12 7.20588C12.2417 7.20588 12.3927 7.08824 12.6848 6.70588C13.3797 5.7451 14.427 4.57843 16.3102 4.57843C18.6465 4.57843 20.3787 6.31373 20.3787 8.92157C20.3787 12.5686 16.4209 16.5 12.2115 19.2255C12.1108 19.2941 12.0403 19.3431 12 19.3431Z'></path>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 19.3432C11.9597 19.3432 11.8892 19.2942 11.7986 19.2255C7.57904 16.5001 3.62134 12.5687 3.62134 8.92163C3.62134 6.31379 5.35346 4.57849 7.68982 4.57849C9.58307 4.57849 10.6707 5.72555 11.3152 6.70594C11.5871 7.0981 11.7583 7.20594 12 7.20594C12.2417 7.20594 12.3927 7.08829 12.6848 6.70594C13.3796 5.74516 14.427 4.57849 16.3102 4.57849C18.6465 4.57849 20.3786 6.31379 20.3786 8.92163C20.3786 12.5687 16.4209 16.5001 12.2115 19.2255C12.1108 19.2942 12.0403 19.3432 12 19.3432Z'></path>
							</svg>
						</button>
					</div>
					<a className='card__link' href='/product/622c779c77d63f6e70967d1c'>
						<img src={picture} alt='' className='card__image' loading='lazy' />
						<div className='card__desc'>
							<div className='price-small price-wrap'>
								{/* <span className='price_old price_left'>4500&nbsp;₽</span> */}
								<span className='price_discount price'>{price}&nbsp;₽</span>
							</div>
							<span className='card__wight'>{wight}</span>
							<h3 className='card__name'>{name}</h3>
						</div>
					</a>
					<a href='#' className='card__cart card__btn card__btn_type_primary'>
						В корзину
					</a>
				</article>
			</div>
		</>
	);
};
export default ProductCard;
