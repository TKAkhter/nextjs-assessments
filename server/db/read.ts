import fsPromises from 'fs/promises';
import path from 'path'

export const getUserData = async () => {
    const filePath = path.join(process.cwd(), 'dummy-user-data.json');
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString());
};

export default getUserData;