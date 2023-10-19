

import { getUserData } from '@/server/db/read';
import { loginModel } from '@/types/user';

export const validateUser = async (filter: loginModel) => {
    const data = await getUserData();
    return data.find((user: loginModel) => user.username === filter.username && user.password === filter.password);
} 

export default validateUser;