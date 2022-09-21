import { IContact } from './../types/contact'
import { model, Schema } from 'mongoose'

const contactSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
)

export default model<IContact>('Contact', contactSchema)
