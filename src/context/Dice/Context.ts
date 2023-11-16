import React from 'react';
import type { DiceContext as IDiceContext } from './types';

const defaultFunc = () => {
  throw new Error('DiceContext is not initialized');
};

export const DiceContext = React.createContext<IDiceContext>({
  isOpen: false,
  hide: defaultFunc,
  show: defaultFunc,
  rollRequest: null,
  rollResults: [],
  submitRollRequest: defaultFunc,
  diceToRoll: [],
  addDie: defaultFunc,
  removeDie: defaultFunc,
  clearDice: defaultFunc,
  rollDice: defaultFunc,
});
