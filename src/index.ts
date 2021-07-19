import {Mongoose} from "mongoose";


class MongooseExample {
    static async main(): Promise<void> {
        const mongooseClient = new Mongoose();
        console.log('Starting Mongoose Application');
        const uri = "mongodb+srv://testusername:testpassword@cluster0.0qe2y.mongodb.net/libraryDb?retryWrites=true&w=majority";

        // callbacks
        mongooseClient.connection.on('error', () => {
            console.log('Connection error: ❌');
        });
        mongooseClient.connection.once('open', () => {
            console.log('Connection successful ✅');
        });

        // connect
        await mongooseClient.connect(uri);
    }

}

MongooseExample.main().catch(console.error);