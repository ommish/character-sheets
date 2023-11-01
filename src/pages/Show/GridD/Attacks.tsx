import React from 'react';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../../hooks/useCharacter';

export const Attacks: React.FC = () => {
  const character = useCharacter();
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
              <SignedNumber
                number={
                  character.modifiers[wp.ability] +
                  (wp.proficient ? character.proficiencyBonus : 0) +
                  wp.additionalToHit
                }
              />
            </div>
            <div>
              {wp.damage.map((damage, i) => (
                <div key={i} className="value-2">
                  {damage.count}
                  {damage.die}
                  {i === 0 && (
                    <>
                      <SignedNumber
                        number={
                          character.modifiers[wp.ability] + wp.additionalDamage
                        }
                      />
                    </>
                  )}{' '}
                  {damage.type}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="label-1 mt-1">Attacks</div>
    </div>
  );
};
