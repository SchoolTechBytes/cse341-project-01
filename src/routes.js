import express from 'express';

import { showHomePage } from './controllers/index.js';
import {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact
} from './controllers/contacts.js';


const router = express.Router();

router.get('/', showHomePage);

// Get all contacts
router.get('/contacts', getAllContacts);
// Get 1 contact by id
router.get('/contacts/:id', getSingleContact);
// Create new contact
router.post('/contacts', createNewContact);
// Update existing contact by id
router.put('/contacts/:id', updateContact);
// Delete contact by id
router.delete('/contacts/:id', deleteContact);

export default router;