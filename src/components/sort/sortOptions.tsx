import React from 'react';
interface ISortOptions {
	handleSortChange: (method: any) => void;
}
const SortOptions: React.FC<ISortOptions> = ({ handleSortChange }) => {
	return (
		<div className='sort'>
			<select onChange={(e) => handleSortChange(e.target.value)}>
				<option value='lowToHigh'>Сначала дешевые</option>
				<option value='highToLow'>Сначала дорогие</option>
				<option value='discount'>По скидке</option>
			</select>
		</div>
	);
};
export default SortOptions;
