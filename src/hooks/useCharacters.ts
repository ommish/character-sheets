import { useMemo } from 'react';
import { getStoredCharacters } from '../data/store';

export const useCharacters = () => useMemo(() => getStoredCharacters(), []);
