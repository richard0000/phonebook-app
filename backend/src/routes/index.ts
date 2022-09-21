import bodyParser from 'body-parser'
import { Router } from 'express'
import {
	getContacts,
	addContact,
	updateContact,
	deleteContact,
} from '../controllers/contacts'

const router: Router = Router()

router.use(bodyParser.json());
router.get('/contacts/', getContacts)
router.post('/contacts/', addContact)
router.put('/contacts/:id', updateContact)
router.delete('/contacts/:id', deleteContact)


export default router
