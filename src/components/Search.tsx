import React, { FC, useState } from 'react'
import { IRepo } from '../types/types'
import RepoItem from './RepoItem';

interface SearchProps {
	repos: IRepo[]
}

const Search: FC<SearchProps> = ({repos}) => {
	const [searchQuery, setSearchQuery] = useState<string>('')

console.log(repos);

const filteredRepo = repos.filter(repo => {
	return repo.name.toLowerCase().includes(searchQuery.toLowerCase())
})

	return (
		<>
		<input 
				value={searchQuery} 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
				placeholder="Search by Repo name..." 
				type="text" />
				<table>
					<thead>
						<tr>
							<th>Avatar</th>
							<th>Name</th>
							<th>Repo name</th>
							<th>Repo URL</th>
							<th>Repo description</th>
						</tr>
					</thead>
			{filteredRepo.map((repo) => {
			return (
					<RepoItem key={repo.id} repo={repo} />
					)
				})}
				</table>
				</>
	)
}

export default Search
