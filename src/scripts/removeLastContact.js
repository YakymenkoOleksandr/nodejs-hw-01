import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

// Видаляємо останній контакт в місиві меодом .pop()
export const removeLastContact = async () => {
 try {
        const filePath = PATH_DB;
        let data = await fs.readFile(filePath, 'utf8');
        data = JSON.parse(data);
     if (data.length >= 1) {
         data.pop();
         await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
     }
        return data;
    } catch (error) {
        console.error('Error removing all contacts:', error);
        return [];
    }
};

removeLastContact();
