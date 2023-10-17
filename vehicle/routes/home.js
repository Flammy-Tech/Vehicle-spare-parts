const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "Vehicle";
const collection = "users";

const client = new MongoClient(url);

// Retrieve products from MongoDB products collection
async function retrieveUsers() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find({}).toArray();
        return documents; // Return the retrieved data
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

router.route('/')
    .get(async (req, res) => {
        const users = retrieveUsers();
        res.render('home')
    }).post(async(req, res) => {

    });


module.exports = router;