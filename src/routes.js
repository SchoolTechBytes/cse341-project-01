import express from 'express';

import { showHomePage } from './controllers/index.js';
import { getAllContacts, getSingleContact } from './controllers/contacts.js';


const router = express.Router();

router.get('/', showHomePage);


router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getSingleContact);

export default router;