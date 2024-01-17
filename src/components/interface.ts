export interface IProduct {
	discount: number;
	stock: number;
	available: boolean;
	pictures: string;
	likes: string[];
	tags: string[];
	isPublished: boolean;
	_id: string;
	name: string;
	price: number;
	wight: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface User {
	name: string;
	about: string;
	avatar: string;
	_id: string;
	email: string;
	__v?: number;
	group?: string;
}
