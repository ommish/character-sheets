import { Die } from '../../types';

export interface Order {
  dice: OrderSegment[];
  onRoll: ((total: number) => void) | undefined;
  label: string | undefined;
}
export interface OrderSegment {
  count: number;
  die: Die;
  bonus: number;
}

export interface Results {
  dice: Result[];
  label: string | undefined;
}
export interface Result extends OrderSegment {
  roll: number[];
}

export interface DiceContext {
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
  previousResults: Results[];
  cart: Die[];
  order: Order | null;
  result: Results | null;
}
