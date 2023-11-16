import React, { useRef } from 'react';
import { RollResult, RollResults } from '../../context/Dice/types';
import { useDice } from '../../hooks/useDice';
import { DICE } from '../../types';
import './Dice.scss';
import { icons } from './icons';
import { rollClassName } from './utils';

const ResultDescription: React.FC<{ result: RollResult }> = ({ result }) => {
  return (
    <span>
      {result.count}
      <i>{result.die}</i> (
      {result.roll.map((roll, i) => (
        <span key={i}>
          {i !== 0 && ' + '}
          <span className={rollClassName(result.die === 'd20', roll)}>
            {roll}
          </span>
        </span>
      ))}
      ){result.bonus !== null && ` + ${result.bonus}`}
    </span>
  );
};

const RollResult: React.FC<{ results: RollResults }> = ({ results }) => {
  const subtotals = results.dice.map(
    ({ roll, bonus }) =>
      roll.reduce((acc, value) => acc + value, 0) + (bonus ?? 0),
  );
  const total = (
    <strong className="total">
      {subtotals.reduce((acc, value) => acc + value, 0)}
    </strong>
  );
  const label = results.label && <h3>{results.label}</h3>;
  if (results.dice.length === 1) {
    return (
      <div className="mb-1">
        {label}
        <span
          className={rollClassName(
            results.dice[0].count === 1 && results.dice[0].die === 'd20',
            results.dice[0].roll[0],
          )}
        >
          {total}
        </span>{' '}
        = <ResultDescription result={results.dice[0]} />
      </div>
    );
  }
  return (
    <div className="mb-1">
      {label}
      {total} ={' '}
      {subtotals.map((value, j) => (
        <>
          {j !== 0 && ' + '}
          <span key={j}>
            <strong className="subtotal">{value}</strong> (
            <ResultDescription result={results.dice[j]} />)
          </span>
        </>
      ))}
    </div>
  );
};

export const Dice: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const {
    isOpen,
    hide,
    show,
    diceToRoll,
    addDie,
    clearDice,
    rollDice,
    rollResults,
  } = useDice();

  if (!isOpen) {
    return (
      <div className="toggle-wrapper hide-on-print">
        <button type="button" onClick={show} className="die" title="Toggle die">
          <div className="roll">ROLL</div>
          {icons.d20('secondary2', '56')}
        </button>
      </div>
    );
  }

  return (
    <div className="dice-wrapper hide-on-print" ref={wrapperRef}>
      <div className="dice">
        {DICE.map((die) => (
          <button
            key={die}
            type="button"
            onClick={() => {
              addDie(die);
            }}
            className="die"
            aria-label={`Add ${die}`}
          >
            <div className="label">{die}</div>
            {icons[die]('primary3', '48')}
            <div className="count">
              {diceToRoll.filter((toRoll) => toRoll === die).length}
            </div>
          </button>
        ))}
      </div>
      <div className="dice-actions">
        <button
          type="button"
          onClick={rollDice}
          disabled={diceToRoll.length === 0}
        >
          Roll
        </button>
        <button
          type="button"
          onClick={clearDice}
          disabled={diceToRoll.length === 0}
        >
          Unselect All
        </button>
        <button type="button" onClick={hide}>
          Close
        </button>
      </div>
      <div className="roll-results">
        {rollResults[0] && <RollResult results={rollResults[0]} />}
        {rollResults.length > 1 && (
          <div className="previous-results">
            {rollResults.slice(1).map((results, i) => (
              <RollResult results={results} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
