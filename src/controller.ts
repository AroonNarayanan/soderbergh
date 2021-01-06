import { Entry, IEntry } from './models';

export async function createEntry(entryJson: any): Promise<IEntry> {
    const entry = new Entry(entryJson);
    await entry.save();
    return entry;
}

export async function getAllEntries(): Promise<IEntry[]> {
    return await Entry.find({}).exec();
}