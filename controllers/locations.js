import { getDb } from '../db/connect.js';
import { ObjectId } from 'mongodb';

export async function getAllLocations(req, res) {
  try {
    const db = getDb();
    const locations = await db.collection('locations').find().toArray();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getSingleLocation(req, res) {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid ID format.' });
    }
    const db = getDb();
    const location = await db
      .collection('locations')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!location) {
      return res.status(404).json({ message: 'Location not found.' });
    }

    res.status(200).json(location);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function createLocation(req, res) {
  try {
    const db = getDb();
    const newLocation = {
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      zipCode: req.body.zipCode,
      maxCapacity: req.body.maxCapacity,
      managerEmail: req.body.managerEmail,
      hasProjector: req.body.hasProjector,
    };

    const response = await db.collection('locations').insertOne(newLocation);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json({ message: 'Creation failed.' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}
