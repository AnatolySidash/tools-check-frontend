import Dexie from 'dexie';

export const database = new Dexie('toolDatabase');

database.version(1).stores({
    tools: '_id',
    filteredTools: '_id',
})