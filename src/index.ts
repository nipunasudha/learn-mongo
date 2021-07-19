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
}

MongooseExample.initialize().then(async () => {
    await MongooseExample.createNewBook();
}).catch(console.error);