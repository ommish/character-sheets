import { Die } from '../../types';

export interface RollRequestSegment {
  count: number;
  die: Die;
  bonus: number | null;
}
export interface RollRequest {
  dice: RollRequestSegment[];
  onRoll: ((total: number) => void) | undefined;
  label: string | undefined;
}

export interface RollResult extends RollRequestSegment {
  roll: number[];
}

export interface RollResults {
  dice: RollResult[];
  label: string | undefined;
}

export interface DiceContext {
  isOpen: boolean;
  hide: () => void;
  show: () => void;
  rollRequest: RollRequest | null;
  rollResults: RollResults[];
  submitRollRequest: (rollRequest: RollRequest) => void;
  diceToRoll: Die[];
  addDie: (die: Die) => void;
  removeDie: (index: number) => void;
  clearDice: () => void;
  rollDice: () => void;
}
