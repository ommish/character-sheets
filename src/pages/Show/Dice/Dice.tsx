import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { d10, d12, d20, d4, d6, d8 } from './icons';

type Die = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100';
const dieTypes: Die[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];
const rollDie = (max: number) => () => Math.floor(Math.random() * max) + 1;
const dieToRoller: Record<Die, () => number> = {
  d4: rollDie(4),
  d6: rollDie(6),
  d8: rollDie(8),
  d10: rollDie(10),
  d12: rollDie(12),
  d20: rollDie(20),
  d100: rollDie(100),
};
const diceIcons = {
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d100: d10,
};

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void,
) => {
  const handleClick = useCallback((e: MouseEvent) => {
    if (ref.current && e.target && ref.current.contains(e.target as Node)) {
      // ignore inside click
      return;
    }
    // handle outside click
    onClickOutside();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.document.addEventListener('mousedown', handleClick);
    return () => {
      window.document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line
  }, []);
};

export const Dice: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dice, setDice] = useState<{ die: Die; roll: number }[]>([]);
  const onReset = useCallback(() => {
    setDice([]);
  }, []);
  const [showDice, setShow] = useState(false);
  const onShow = useCallback(() => {
    setShow(true);
  }, []);
  const onHide = useCallback(() => {
    setShow(false);
    onReset();
    // eslint-disable-next-line
  }, []);
  useOnClickOutside(wrapperRef, onHide);

  if (!showDice) {
    return (
      <div className="toggle-wrapper">
        <button
          type="button"
          onClick={onShow}
          className="die"
          title="Toggle die"
        >
          <div className="roll">ROLL</div>
          {d20('secondary2', '56')}
        </button>
      </div>
    );
  }

  return (
    <div className="dice-wrapper">
      <div className="buttons">
        {dieTypes.map((die) => (
          <button
            key={die}
            type="button"
            onClick={() => {
              setDice([{ die, roll: dieToRoller[die]() }].concat(dice));
            }}
            className="die"
            title={die}
          >
            <div className="label">{die}</div>
            {diceIcons[die]('primary3', '48')}
            <div className="count">
              {dice.filter((rolledDie) => rolledDie.die === die).length}
            </div>
          </button>
        ))}
        <button type="button" onClick={onReset} className="reset" title="Reset">
          Reset
        </button>
      </div>
      <div className="rolled">
        {dice.map(({ die, roll }, i) => (
          <React.Fragment key={i.toString()}>
            <div
              className={`die ${
                die === 'd20' && roll === 1 ? 'crit-fail' : ''
              } ${die === 'd20' && roll === 20 ? 'crit' : ''}`}
            >
              <div className="label">{die}</div>
              {diceIcons[die](
                die === 'd20' && roll === 1
                  ? 'error5'
                  : die === 'd20' && roll === 20
                  ? 'success5'
                  : 'warning2',
                '48',
              )}
              <div className="roll">{roll}</div>
            </div>
            <span className="plus">{i < dice.length - 1 && '+'}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="total">
        = {dice.reduce((acc, { roll }) => acc + roll, 0)}
      </div>
    </div>
  );
};
