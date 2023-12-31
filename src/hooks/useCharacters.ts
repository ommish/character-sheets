import { useContext } from 'react';
import { CharacterContext } from '../context/Character/Context';

export const useCharacters = () => useContext(CharacterContext).characters;
