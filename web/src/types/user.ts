import { University } from './universities'

export interface User {
	email: string
	password: string
	universities: University[]
}
