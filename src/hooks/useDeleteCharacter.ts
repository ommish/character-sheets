import { useContext } from 'react';
import { CharacterContext } from '../context/Character/Context';

export const useDeleteCharacter = () =>
  useContext(CharacterContext).deleteCharacter;
