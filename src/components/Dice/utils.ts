import { Die } from '../../types';

const roll = (max: number) => () => Math.floor(Math.random() * max) + 1;

const dieToRoller: Record<Die, () => number> = {
  d4: roll(4),
  d6: roll(6),
  d8: roll(8),
  d10: roll(10),
  d12: roll(12),
  d20: roll(20),
  d100: roll(100),
};

export const rollDie = (die: Die): number => {
  return dieToRoller[die]();
};

export const rollClassName = (isD20: boolean, roll: number) =>
  isD20
    ? roll === 20
      ? 'crit'
      : roll === 1
      ? 'crit-fail'
      : undefined
    : undefined;
