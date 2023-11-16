import { useContext } from 'react';
import { CharacterContext } from '../context/Character/Context';

export const useStoreCharacter = () =>
  useContext(CharacterContext).storeCharacter;
