import { entries } from 'lodash';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { rollDie } from '../../components/Dice/utils';
import { Die } from '../../types';
import { DiceContext } from './Context';
import {
  RollRequest,
  RollRequestSegment,
  RollResult,
  RollResults,
} from './types';

export const DiceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [diceToRoll, setDiceToRoll] = useState<Die[]>([]);
  const [rollRequest, setRollRequest] = useState<RollRequest | null>(null);
  const { current: rollResults } = useRef<RollResults[]>([]);
  const [, forceRender] = useState(0);

  const hide = useCallback(() => {
    setRollRequest(null);
    setIsOpen(false);
  }, [setRollRequest, setIsOpen]);

  const show = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const submitRollRequest = useCallback(
    (newRollRequest: RollRequest) => {
      const dice = newRollRequest.dice.reduce<RollResult[]>(
        (acc, { count, die, bonus }) => {
          const roll = new Array(count)
            .fill(null)
            .reduce<number[]>((acc) => acc.concat(rollDie(die)), []);
          return acc.concat({ count, die, bonus, roll });
        },
        [],
      );
      rollResults.unshift({
        dice,
        label: newRollRequest.label,
      });
      newRollRequest.onRoll?.(
        dice.reduce(
          (acc, result) =>
            acc + result.roll.reduce((acc, result) => acc + result, 0),
          0,
        ),
        dice.length === 1 && dice[0].die === 'd20'
          ? dice[0].roll[0] === 20
            ? 'crit'
            : dice[0].roll[0] === 1
            ? 'crit-fail'
            : undefined
          : undefined,
      );
      setRollRequest(newRollRequest);
      show();
    },
    [setRollRequest, rollResults, show],
  );

  useEffect(() => {
    if (rollRequest?.onRoll) {
      console.log('force render');
      forceRender(Date.now());
      setRollRequest(null);
    }
  }, [rollRequest]);

  const addDie = useCallback(
    (die: Die) => {
      setDiceToRoll((prev) => [...prev, die]);
    },
    [setDiceToRoll],
  );

  const removeDie = useCallback(
    (index: number) => {
      setDiceToRoll(
        diceToRoll.slice(0, index).concat(diceToRoll.slice(index + 1)),
      );
    },
    [diceToRoll, setDiceToRoll],
  );
  const clearDice = useCallback(() => {
    setDiceToRoll([]);
  }, [setDiceToRoll]);

  const rollDice = useCallback(() => {
    const byDie = diceToRoll.reduce<Partial<Record<Die, number>>>(
      (acc, die) => ({ ...acc, [die]: (acc[die] ?? 0) + 1 }),
      {},
    );
    const newRollRequest = {
      dice: entries(byDie).reduce<RollRequestSegment[]>(
        (acc, [die, count]) =>
          acc.concat({ count, die: die as Die, bonus: null }),
        [],
      ),
      onRoll: undefined,
      label: entries(byDie)
        .map(([die, count]) => `${count}${die}`)
        .join(' + '),
    };
    submitRollRequest(newRollRequest);
  }, [diceToRoll, submitRollRequest]);

  return (
    <DiceContext.Provider
      value={{
        isOpen,
        hide,
        show,
        rollRequest,
        rollResults,
        submitRollRequest,
        diceToRoll,
        addDie,
        removeDie,
        clearDice,
        rollDice,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export {};
