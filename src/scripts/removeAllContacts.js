import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

// Видаляємо весь масив шляхом його перезапису
export const removeAllContacts = async () => {
    try {
        const filePath = PATH_DB;
        let data = await fs.readFile(filePath, 'utf8');
        data = JSON.parse(data);
        data = [];
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        return data;
    } catch (error) {
        console.error('Error removing all contacts:', error);
        return [];
    }
};

removeAllContacts();
