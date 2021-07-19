const {MongoClient} = require('mongodb');

class PureMongo {
    static async main(): Promise<void> {
        console.log('Starting Library Application');
        const uri = "mongodb+srv://testusername:testpassword@cluster0.0qe2y.mongodb.net/libraryDb?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        await client.connect();
        const collection = client.db("libraryDb").collection("books");
        const bookCount = await collection.countDocuments();
        console.log(bookCount);
        /*    await collection.insertOne({
                'name': 'My Book 3',
                'author': 'My Author 3',
            })*/
        await client.close();
    }

}

PureMongo.main().catch(console.error);