import { getDatabase } from '../data/database.js'
import { ObjectId } from 'mongodb';

const getAllContacts = async (req, res) => {
    const result = getDatabase().db('project1').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingleContact = async (req, res) => {
    const concatId = new ObjectId(req.params.id);
    const result = getDatabase().db('project1').collection('contacts').find({ _id: concatId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

export {
    getAllContacts,
    getSingleContact
};