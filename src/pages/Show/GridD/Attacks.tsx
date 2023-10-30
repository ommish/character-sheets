import React from 'react';
import { SignedNumber } from '../../../components';
import { Info } from '../../../components/Info';
import { useCharacter } from '../../useCharacter';

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
              {wp.name}{' '}
              {wp.remainingUses !== null && <span>({wp.remainingUses})</span>}
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
            <div className="value-2">
              {wp.damage.count}
              {wp.damage.die}
              <SignedNumber
                number={character.modifiers[wp.ability] + wp.additionalDamage}
              />{' '}
              {wp.damage.type}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="label-1 mt-1">Attacks</div>
    </div>
  );
};
