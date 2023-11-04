// import React, { useCallback, useRef, useState } from 'react';
// import { rollDie } from '../../components/Dice/utils';
// import { Die } from '../../types';
// import { DiceContext } from './Context';
// import { Order, OrderSegment, Result, Results } from './types';

// export const DiceProvider: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cart, setCart] = useState<Die[]>([]);
//   const [order, setOrder] = useState<Order | null>(null);
//   const results = useRef<Results[]>([]);

//   const toggleOpen = useCallback(
//     (newIsOpen: boolean) => {
//       if (!newIsOpen) {
//         setOrder(null);
//       }
//       setIsOpen(newIsOpen);
//     },
//     [setOrder, setIsOpen],
//   );

//   const makeOrder = useCallback(
//     (newOrder: Order) => {
//       const dice = newOrder.dice.reduce<Result[]>(
//         (acc, { count, die, bonus }) => {
//           const roll = new Array(count)
//             .fill(null)
//             .reduce<number[]>((acc) => acc.concat(rollDie(die)), []);
//           return acc.concat({ count, die, bonus, roll });
//         },
//         [],
//       );
//       results.current.push({
//         dice,
//         label: newOrder.label,
//       });
//       setOrder(newOrder);
//     },
//     [setOrder],
//   );

//   const addToCart = useCallback(
//     (die: Die) => {
//       setCart((prev) => [...prev, die]);
//     },
//     [setCart],
//   );

//   const removeFromCart = useCallback(
//     (index: number) => {
//       setCart(cart.slice(0, index).concat(cart.slice(index + 1)));
//     },
//     [cart, setCart],
//   );

//   const checkout = useCallback(() => {
//     const newOrder = {
//       dice: cart.reduce<OrderSegment[]>(
//         (acc, die) => acc.concat({ count: 1, die, bonus: 0 }),
//         [],
//       ),
//       onRoll: undefined,
//       label: undefined,
//     };
//     makeOrder(newOrder);
//   }, [cart, makeOrder]);

//   return <DiceContext.Provider value={{}}></DiceContext.Provider>;
// };

export {};
