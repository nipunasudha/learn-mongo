import {connect} from "mongoose";
import {BookModel} from "./models/book-model";


class MongooseExample {
    static async initialize(): Promise<void> {
        console.log('Starting Mongoose Application');
        const uri = "mongodb+srv://testusername:testpassword@cluster0.0qe2y.mongodb.net/libraryDb?retryWrites=true&w=majority";

        // connect
        try {
            await connect(uri);
            console.log('Connection successful ✅');
        } catch (e) {
            console.log('Connection error: ❌');
        }
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

    static async getAllBooks(): Promise<void> {
        const result = await BookModel.find();
        console.log(result)
        result.map((book) => book.printLabel());
    }
}

MongooseExample.initialize().then(async () => {
    await MongooseExample.createNewBook();
    // await MongooseExample.runBookQuery();
    await MongooseExample.getAllBooks();
}).catch(console.error);