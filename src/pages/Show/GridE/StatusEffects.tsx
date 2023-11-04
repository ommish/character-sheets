import { indexOf } from 'lodash';
import React from 'react';
import { Select } from '../../../components';
import { getStoredCharacter, storeCharacter } from '../../../data/store';
import { useCharacter } from '../../../hooks/useCharacter';
import { STATUS_EFFECTS, StatusEffect } from '../../../types';
import { X } from 'react-bootstrap-icons';

const options = [
  {
    value: '',
    label: 'Add Effect',
  },
].concat(STATUS_EFFECTS.map((ef) => ({ value: ef, label: ef })));

export const StatusEffects: React.FC = () => {
  const character = useCharacter();

  const EffectWrapper: React.FC<{
    children: string;
    onRemove: () => void;
  }> = ({ children: effect, onRemove }) => (
    <li className="value-2 flex align-center my-0-5">
      <button
        type="button"
        className="hide-on-print"
        onClick={() => {
          const newCharacter = {
            ...getStoredCharacter(character.name),
          };
          newCharacter.statusEffects = newCharacter.statusEffects.filter(
            (ef) => ef !== effect,
          );
          storeCharacter(newCharacter);
          onRemove();
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
        initialValue={character.statusEffects}
        selectedItemWrapper={EffectWrapper}
        onChange={(e) => {
          const newCharacter = {
            ...getStoredCharacter(character.name),
          };
          const ef = e.currentTarget.value as StatusEffect | '';
          if (ef && !newCharacter.statusEffects.includes(ef)) {
            newCharacter.statusEffects.push(ef);
            storeCharacter(newCharacter);
          }
        }}
        options={options}
      />
      <div className="label-1 mt-1">Status Effects</div>
    </div>
  );
};
