import {connect, connection} from "mongoose";
import {BookModel} from "./models/book-model";


class MongooseExample {
    static async initialize(): Promise<void> {
        console.log('Starting Mongoose Application');
        const uri = "mongodb+srv://testusername:testpassword@cluster0.0qe2y.mongodb.net/libraryDb?retryWrites=true&w=majority";

        // callbacks
        connection.on('error', () => {
            console.log('Connection error: ❌');
        });
        connection.once('open', () => {
            console.log('Connection successful ✅');
        });

        // connect
        await connect(uri);
    }

    static async createNewBook(): Promise<void> {
        const doc = new BookModel({
            name: 'My Special Book',
            author: 'My Special Author',
        });
        await doc.save();
    }

    static async runBookQuery(): Promise<void> {
        const result = await BookModel.find({name: "My Book 2"});
        console.log(result)
        console.log(result.length)
    }
}

MongooseExample.initialize().then(async () => {
    // await MongooseExample.createNewBook();
    await MongooseExample.runBookQuery();
}).catch(console.error);