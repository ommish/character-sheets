import React from 'react';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../../hooks/useCharacter';
import { useDice } from '../../../hooks/useDice';
import { DigestedCharacter, Weapon } from '../../../types';

const getAttackBonus = (character: DigestedCharacter, weapon: Weapon) =>
  character.modifiers[weapon.ability] +
  (weapon.proficient ? character.proficiencyBonus : 0) +
  weapon.additionalToHit;

const getDamageBonus = (
  character: DigestedCharacter,
  weapon: Weapon,
  i: number,
): number | null =>
  i === 0 || weapon.damage[i].bonus
    ? (weapon.damage[i].bonus ?? 0) +
      (i == 0 ? character.modifiers[weapon.ability] : 0)
    : null;

export const Attacks: React.FC = () => {
  const character = useCharacter();
  const { submitRollRequest } = useDice();
  return (
    <div className="bordered-box">
      <div className="attacks-grid">
        <div className="text-light-2">NAME</div>
        <div className="text-light-2">ATK BONUS</div>
        <div className="text-light-2">DAMAGE</div>
        {character.weapons.map((wp) => (
          <React.Fragment key={wp.name}>
            <div className="value-2">
              {wp.name}
              <Info title={wp.notes} />
            </div>
            <div className="value-2">
              <button
                type="button"
                className="plain-button"
                onClick={() => {
                  submitRollRequest({
                    label: `${wp.name} (attack)`,
                    onRoll: undefined,
                    dice: [
                      {
                        die: 'd20',
                        count: 1,
                        bonus: getAttackBonus(character, wp),
                      },
                    ],
                  });
                }}
              >
                <SignedNumber number={getAttackBonus(character, wp)} />
              </button>
            </div>
            <div>
              <button
                type="button"
                className="plain-button"
                onClick={() => {
                  submitRollRequest({
                    label: `${wp.name} (damage)`,
                    onRoll: undefined,
                    dice: wp.damage.map((dmg, i) => ({
                      die: dmg.die,
                      count: dmg.count,
                      bonus: getDamageBonus(character, wp, i),
                    })),
                  });
                }}
              >
                {wp.damage.map((damage, i) => (
                  <div key={i} className="value-2">
                    {damage.count}
                    {damage.die}
                    {i === 0 || damage.bonus ? (
                      <SignedNumber
                        number={getDamageBonus(character, wp, i) ?? 0}
                      />
                    ) : null}{' '}
                    {damage.type}
                  </div>
                ))}
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="label-1 mt-1">Attacks</div>
    </div>
  );
};
