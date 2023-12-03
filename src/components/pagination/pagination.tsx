import { Pagination, Stack, Typography } from '@mui/material';
import React, { ChangeEvent } from 'react';
interface IPagination {
	countPage: number;
	currentPage: number;
	handlePageChange: (e: ChangeEvent<unknown>, page: number) => void;
}
const PaginationUse: React.FC<IPagination> = ({
	countPage,
	currentPage,
	handlePageChange,
}) => {
	return (
		<Stack spacing={2} sx={{ marginTop: 2 }}>
			<Typography> Страница {currentPage}</Typography>
			<Pagination
				count={countPage}
				page={currentPage}
				onChange={handlePageChange}
			/>
		</Stack>
	);
};

export default PaginationUse;
