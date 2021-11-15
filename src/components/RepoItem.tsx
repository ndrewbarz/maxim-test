import React, { FC } from 'react'
import { IRepo } from '../types/types'

interface RepoItemProps {
	repo: IRepo
}

const RepoItem: FC<RepoItemProps> = ({repo}) => {
	return (
		<tr>
			<td><img style={{width:'40px'}} src={repo.owner.avatar_url} alt={repo.owner.login} /></td>
			<td>{repo.owner.login}</td>
			<td>{repo.name}</td>
			<td><a href={repo.html_url}>Link</a></td>
			<td>{repo.description}</td>
		</tr>
	)
}

export default RepoItem
