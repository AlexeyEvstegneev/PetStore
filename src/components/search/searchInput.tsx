import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
interface ISearchInput {
	searchTerm: string;
	handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<ISearchInput> = ({
	searchTerm,
	handleSearchChange,
}) => {
	return (
		<>
			<TextField
				label='Search Products'
				variant='outlined'
				value={searchTerm}
				onChange={handleSearchChange}
			/>
		</>
	);
};
export default SearchInput;
