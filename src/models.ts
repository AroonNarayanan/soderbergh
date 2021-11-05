import mongoose, { Document, Schema } from 'mongoose';

export interface IEntry extends Document {
    title: string,
    year: number,
    type: string,
    episodeCount: number,
    dateWatched: Date,
    tmdbid: number,
    posterUrl: string
}

const EntrySchema: Schema = new Schema({
    title: String,
    year: Number,
    type: String,
    episodeCount: Number,
    dateWatched: Date,
    tmdbid: Number,
    posterUrl: String,
}, {timestamps: true});

const Entry = mongoose.model<IEntry>('Entry', EntrySchema)

export { Entry }