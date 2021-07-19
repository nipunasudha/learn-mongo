import {model, Schema} from "mongoose";

export interface IBook {
    name: string;
    author: string;

    printLabel(): void;
}

const bookSchema = new Schema<IBook>({
    name: {type: String, required: true},
    author: {type: String, required: true},
});

bookSchema.methods.printLabel = function () {
    console.log(`[${this.name}:${this.author}]`);
}

export const BookModel = model<IBook>('Book', bookSchema);