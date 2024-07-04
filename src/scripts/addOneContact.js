import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

// Отримуємо контакти наявні у файлі
const getContacts = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

// Відсилаємо данні у файл
const postContact = async (filePath, contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(filePath, data, 'utf8');
  } catch (error) {
    console.error('Error writing file:', error);
  }
};

// Додавання контакту до файлу
const addOneContact = async () => {
  try {
    const filePath = PATH_DB;
    const сontactsFromDB = await getContacts(filePath);
    let contact = createFakeContact();
    const updatedContacts = [...сontactsFromDB, contact];
    await postContact(filePath, updatedContacts);
  } catch (error) {
    console.error('Error:', error);
  }
};

addOneContact();
