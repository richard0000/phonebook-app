import { Document } from 'mongoose'

export interface IContact extends Document {
	name: string
	number: string
}
