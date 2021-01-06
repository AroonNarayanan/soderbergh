import mongoose, { Document, Schema } from 'mongoose';

export interface IEntry extends Document {
    title: string,
    year: number,
    type: string,
    date: Date
}

const EntrySchema: Schema = new Schema({
    title: String,
    year: Number,
    type: String,
    date: Date
}, {timestamps: true});

const Entry = mongoose.model<IEntry>('Entry', EntrySchema)

export { Entry }