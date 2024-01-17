import { createContext } from 'react';
import { User } from '../interface';

export const UserContext = createContext<User | null>(null);

UserContext.displayName = 'UserContext';
