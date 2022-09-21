import { Response, Request } from 'express'
import { IContact } from './../../types/contact'
import Contact from '../../models/contact'

const getContacts = async (req: Request, res: Response): Promise<void> => {
	try {
		const contacts: IContact[] = await Contact.find()
		res.status(200).json({ contacts })
	} catch (error) {
		throw error
	}
}

const addContact = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<IContact, 'name' | 'number'>
		const contact: IContact = new Contact({
			name: body.name,
			number: body.number,
		})

		const newContact: IContact = await contact.save()
		const allContacts: IContact[] = await Contact.find()

		res
			.status(201)
			.json({
				message: 'Contact added',
				contact: newContact,
				contacts: allContacts,
			})
	} catch (error) {
		throw error
	}
}

const updateContact = async (req: Request, res: Response): Promise<void> => {
	try {
		const {
			params: { id },
			body,
		} = req
		const updateContact: IContact | null = await Contact.findByIdAndUpdate(
			{ _id: id },
			body,
		)
		const allContacts: IContact[] = await Contact.find()
		res.status(200).json({
			message: 'Contact updated',
			contact: updateContact,
			contacts: allContacts,
		})
	} catch (error) {
		throw error
	}
}

const deleteContact = async (req: Request, res: Response): Promise<void> => {
	try {
		const deletedContact: IContact | null = await Contact.findByIdAndRemove(
			req.params.id,
		)
		const allContacts: IContact[] = await Contact.find()
		res.status(200).json({
			message: 'Contact deleted',
			contact: deletedContact,
			contacts: allContacts,
		})
	} catch (error) {
		throw error
	}
}

export { getContacts, addContact, updateContact, deleteContact }
