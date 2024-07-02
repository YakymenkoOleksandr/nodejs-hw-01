import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

// Отримуємо контакти з файлу
const getAllContacts = async () => {
  try {
    const filePath = path.join(PATH_DB);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

console.log(await getAllContacts());
