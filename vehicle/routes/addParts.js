const express = require('express');
const {Mongoclient} = require('mongodb');
const router = express.Router();
const {MongoClient} = require('mongodb');


// MongoDB Connection Configuration
const url = "mongodb://localhost:27017";
const dbName = "Vehicle"; // MongoDB database name
const collectionName = "parts"; // Collection for storing partss

router.route('/')
    .get((req, res) =>{
        res.render('addParts');
    }).post(async (req, res) =>{
        try {
            // Connect to the MongoDB server
            const client = new MongoClient(url);
            await client.connect();
    
            // Get a reference to the database
            const db = client.db(dbName);
    
            // Get a reference to the partss collection
            const collection = db.collection(collectionName);
    
            // Extract parts data from the request
            const { name, price, available } = req.body;
    
            // Create a parts object
            const parts = {
                name,
                price,
                available 
            };
    
            // Insert the parts into the collection
            await collection.insertOne(parts);
    
            // Close the database connection
            client.close();
    
            res.status(200).json({message: 'created successfully'});
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('An error occurred while registering the parts.');
        }
        
    });


module.exports = router;