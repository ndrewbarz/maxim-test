
export interface IOwner {
	login: string,
	avatar_url: string,
}

export interface IRepo {
	id: number,
	owner: IOwner,
	name: string,
	html_url: string,
	description: string
}