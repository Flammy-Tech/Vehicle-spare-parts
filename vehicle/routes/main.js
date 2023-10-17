const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "Vehicle";

const client = new MongoClient(url);

// Retrieve users from MongoDB users collection
// Retrieve users from MongoDB users collection
async function retrieveUsers() {
    try {
        await client.connect();
        console.log("Connected to the database");
        const db = client.db(dbName);
        const collection = db.collection("users");
        const documents = await collection.find({}).toArray();
        return documents; // Return the retrieved data
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
        console.log("Database connection closed");
    }
}

async function retrieParts() {
    try {
        await client.connect();
        console.log("Connected to the database");
        const db = client.db(dbName);
        const collection = db.collection("parts");
        const documents = await collection.find({}).toArray();
        return documents; // Return the retrieved data
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
        console.log("Database connection closed");
    }
}

router.route('/')
    .get(async (req, res) => {
        let users = await retrieveUsers();
        let parts = await retrieParts();
        res.render('main', { users, parts });
    });

module.exports = router;
