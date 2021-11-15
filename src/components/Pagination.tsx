import React, { FC } from 'react'

interface PaginationProps {
	repoPerPage: number,
	totalRepos: number,
	paginate: (page: number) => void 
}

const Pagination: FC<PaginationProps> = ({repoPerPage, totalRepos, paginate}) => {
	const pageNumbers = []

	for (let i = 0; i <= Math.ceil(totalRepos / repoPerPage); i++) {
		pageNumbers.push(i + 1)	
	}

	return (
		<div>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li key={number}>
						<a href="!#" onClick={() => paginate(number)}>{number}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pagination
