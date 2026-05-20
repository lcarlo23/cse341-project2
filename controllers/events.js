import { getDb } from '../db/connect.js';
import { ObjectId } from 'mongodb';

export async function getAllEvents(req, res) {
  try {
    const db = getDb();
    const events = await db.collection('events').find().toArray();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getSingleEvent(req, res) {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid ID format.' });
    }
    const db = getDb();
    const event = await db
      .collection('events')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!event) {
      return res.status(404).json({ message: 'Event not found.' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function createEvent(req, res) {
  try {
    const db = getDb();
    const newEvent = {
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      capacity: req.body.capacity,
      ticketPrice: req.body.ticketPrice,
      category: req.body.category,
      isVirtual: req.body.isVirtual,
    };

    const response = await db.collection('events').insertOne(newEvent);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json({ message: 'Creation failed.' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}
