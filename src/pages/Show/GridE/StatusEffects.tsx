import { indexOf } from 'lodash';
import React from 'react';
import { X } from 'react-bootstrap-icons';
import { Select } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { useRawCharacter } from '../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../hooks/useStoreCharacter';
import { STATUS_EFFECTS, StatusEffect } from '../../../types';

const options = [
  {
    value: '',
    label: 'Add Effect',
  },
].concat(STATUS_EFFECTS.map((ef) => ({ value: ef, label: ef })));

export const StatusEffects: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();

  const EffectWrapper: React.FC<{
    children: string;
  }> = ({ children: effect }) => (
    <li className="value-2 flex align-center my-0-5">
      <button
        type="button"
        className="hide-on-print"
        onClick={() => {
          const newCharacter = {
            ...rawCharacter,
          };
          newCharacter.statusEffects = newCharacter.statusEffects.filter(
            (ef) => ef !== effect,
          );
          storeCharacter(newCharacter);
        }}
      >
        <X className="hide-on-print" />
      </button>
      <a
        href={`https://roll20.net/compendium/dnd5e/Conditions#toc_${
          indexOf(STATUS_EFFECTS, effect) + 1
        }`}
        target="_blank"
        rel="noreferrer"
        className="ml-1"
      >
        {effect}
      </a>
    </li>
  );

  return (
    <div className="status-effects bordered-box">
      <Select
        className="hide-on-print mt-1"
        aria-label="Add Status Effect"
        multi
        value={character.statusEffects}
        selectedItemWrapper={EffectWrapper}
        onChange={(e) => {
          const newCharacter = {
            ...rawCharacter,
          };
          const ef = e.currentTarget.value as StatusEffect | '';
          if (ef && !newCharacter.statusEffects.includes(ef)) {
            newCharacter.statusEffects = newCharacter.statusEffects.concat(ef);
            storeCharacter(newCharacter);
          }
        }}
        options={options}
      />
      <div className="label-1 mt-1">Status Effects</div>
    </div>
  );
};
