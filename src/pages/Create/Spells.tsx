import React from 'react';
import { addSpell } from '../../formUtils/addSpell';

export const Spells: React.FC<{ level: string }> = ({ level }) => {
  return (
    <fieldset>
      <legend>{level === '0' ? 'Cantrips' : `Level ${level} Spells`}</legend>
      {level !== '0' && (
        <label>
          <span>Slots</span>
          <input
            name={`spells.${level}.total`}
            id={`spells.${level}.total`}
            type="number"
            step="1"
            min="0"
          />
        </label>
      )}
      <fieldset id={`spells.${level}.spells`}>
        <legend>Spells</legend>
      </fieldset>
      <div className="add">
        <button
          type="button"
          onClick={() => {
            addSpell(level);
          }}
        >
          Add {level === '0' ? 'Cantrip' : `Level ${level} Spell`}
        </button>
      </div>
    </fieldset>
  );
};
