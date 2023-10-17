const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); 
const {MongoClient} = require('mongodb');

// MongoDB Connection Configuration
const url = "mongodb://localhost:27017";
const dbName = "Vehicle"; // MongoDB database name
const collectionName = "users"; // Collection for storing users

router.get('/', (req, res) => {
    res.render('register'); // Render the registration form
});


router.post('/', async (req, res) => {
    try {
        // Connect to the MongoDB server
        const client = new MongoClient(url);
        await client.connect();

        // Get a reference to the database
        const db = client.db(dbName);

        // Get a reference to the users collection
        const collection = db.collection(collectionName);

        // Extract user data from the request
        const { username, name, password, number } = req.body;

        // Create a user object
        const user = {
            username,
            name,
            password,
            number
        };

        // Insert the user into the collection
        await collection.insertOne(user);

        // Close the database connection
        client.close();

        res.status(200).render('main');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('An error occurred while registering the user.');
    }
});


module.exports = router;
