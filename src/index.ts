import {AnyError} from "mongodb";

const {MongoClient} = require('mongodb');

console.log('Starting Library Application');

const uri = "mongodb+srv://testusername:testpassword@cluster0.0qe2y.mongodb.net/libraryDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect(async (err: AnyError | undefined) => {
    const collection = client.db("libraryDb").collection("books");
    // perform actions on the collection object
    const bookCount = await collection.countDocuments();
    console.log(bookCount);
    await collection.insertOne({
        'name': 'My Book 3',
        'author': 'My Author 3',
    })
    await client.close();
});
