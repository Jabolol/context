import fs from 'fs/promises';
import { Blob } from 'buffer';

export async function readAndCreateBlob(path: string) {
  try {
    const data = await fs.readFile(path);
    const file = new Blob([data], { type: 'image/png' });
    return file;
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}