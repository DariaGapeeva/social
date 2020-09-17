import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {

	const handlePageClick = (data) => {
		console.log(data.selected)
		props.setNewCurrentPage(data.selected + 1)
	}


	let pageCount = Math.ceil(props.totalCount / props.pageSize);


	return (

		<div>
			<ReactPaginate
				previousLabel="&#8249;"
				nextLabel="&#8250;"
				breakLabel={'...'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				pageRangeDisplayed={props.pageSize}
				onPageChange={handlePageClick}
				activeClassName={styles.selectedPage}
				containerClassName={styles.paginationContainer}
				pageClassName={styles.paginationLi}
				pageLinkClassName={styles.paginationPage}
				previousClassName={styles.paginationPreviousClassName}
				nextClassName={styles.paginationNextClassName}
			/>
		</div>
	)

}

export default Pagination;