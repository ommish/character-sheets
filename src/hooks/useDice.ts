import { useContext } from 'react';
import { DiceContext } from '../context/Dice/Context';

export const useDice = () => {
  return useContext(DiceContext);
};
