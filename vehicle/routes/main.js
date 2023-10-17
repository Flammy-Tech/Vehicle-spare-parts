const express = require('express');
const router = express.Router();
const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "vehicle";


const client = new MongoClient(url);

// Retrieve products from MongoDB products collection
async function retrieveUsers() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("users");
        const documents = await collection.find({}).toArray();
        return documents; // Return the retrieved data
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

router.route('/')
    .get(async(req, res) =>{
        let users = await retrieveUsers();
        res.render('main', {users})
    });


module.exports = router;