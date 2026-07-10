import { getDatabase } from '../data/database.js'
import { ObjectId } from 'mongodb';

const getAllContacts = async (req, res) => {
    /*
        #swagger.description = 'Gets all the contacts in the database.'
    */
    const result = getDatabase().db('project1').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingleContact = async (req, res) => {
    /*
        #swagger.description = 'Retrives only 1 contact, contact id must be provided: 6a47d3f729b5855bd6bb85b1'
    */
    const contactId = new ObjectId(req.params.id);
    const result = getDatabase().db('project1').collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const createNewContact = async (req, res) => {
    /*
        #swagger.description = 'Create a new contact'
    */
    // Validate request
    if (!req.body.firstName) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await getDatabase().db('project1').collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json({ message: 'Contact created', id: response.insertedId });
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact');
    };
};

const updateContact = async (req, res) => {
    /*
        #swagger.description = 'Update a contact, contact id must be provided: 6a47d3f729b5855bd6bb85b2'
    */
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await getDatabase().db('project1').collection('contacts').replaceOne({ _id: contactId }, contact);
    if (response.modifiedCount > 0) {
        res.status(204).end();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact');
    };
};

const deleteContact = async (req, res) => {
    /*
        #swagger.description = 'Delete a contact, contact id must be provided: 6a47d3f729b5855bd6bb85b3'
    */
    const contactId = new ObjectId(req.params.id);

    const response = await getDatabase().db('project1').collection('contacts').deleteOne({ _id: contactId });
    if (response.deletedCount > 0) {
        res.status(204).end();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact');
    };
};

export {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact
};