import React from 'react';
import type { DiceContext as TDiceContext } from './types';

export const DiceContext = React.createContext<TDiceContext>({
  isOpen: false,
  toggleOpen: () => {
    throw new Error('DiceContext is not initialized');
  },
  previousResults: [],
  cart: [],
  order: null,
  result: null,
});
