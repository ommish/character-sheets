// import React, {
//   RefObject,
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from 'react';
// import { d10, d12, d20, d4, d6, d8 } from '../../../components/Dice/icons';
// import { DICE, Die } from '../../../types';

// export const Dice: React.FC = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const [dice, setDice] = useState<{ die: Die; roll: number }[]>([]);
//   const onReset = useCallback(() => {
//     setDice([]);
//   }, []);
//   const [showDice, setShow] = useState(false);
//   const onShow = useCallback(() => {
//     setShow(true);
//   }, []);
//   const onHide = useCallback(() => {
//     setShow(false);
//     onReset();
//     // eslint-disable-next-line
//   }, []);
//   useOnClickOutside(wrapperRef, onHide);

//   if (!showDice) {
//     return (
//       <div className="toggle-wrapper">
//         <button
//           type="button"
//           onClick={onShow}
//           className="die"
//           title="Toggle die"
//         >
//           <div className="roll">ROLL</div>
//           {d20('secondary2', '56')}
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="dice-wrapper">
//       <div className="buttons">
//         {DICE.map((die) => (
//           <button
//             key={die}
//             type="button"
//             onClick={() => {
//               setDice([{ die, roll: dieToRoller[die]() }].concat(dice));
//             }}
//             className="die"
//             title={die}
//           >
//             <div className="label">{die}</div>
//             {diceIcons[die]('primary3', '48')}
//             <div className="count">
//               {dice.filter((rolledDie) => rolledDie.die === die).length}
//             </div>
//           </button>
//         ))}
//         <button type="button" onClick={onReset} className="reset" title="Reset">
//           Reset
//         </button>
//       </div>
//       <div className="rolled">
//         {dice.map(({ die, roll }, i) => (
//           <React.Fragment key={i.toString()}>
//             <div
//               className={`die ${
//                 die === 'd20' && roll === 1 ? 'crit-fail' : ''
//               } ${die === 'd20' && roll === 20 ? 'crit' : ''}`}
//             >
//               <div className="label">{die}</div>
//               {diceIcons[die](
//                 die === 'd20' && roll === 1
//                   ? 'error5'
//                   : die === 'd20' && roll === 20
//                   ? 'success5'
//                   : 'warning2',
//                 '48',
//               )}
//               <div className="roll">{roll}</div>
//             </div>
//             <span className="plus">{i < dice.length - 1 && '+'}</span>
//           </React.Fragment>
//         ))}
//       </div>
//       <div className="total">
//         = {dice.reduce((acc, { roll }) => acc + roll, 0)}
//       </div>
//     </div>
//   );
// };

export {};
