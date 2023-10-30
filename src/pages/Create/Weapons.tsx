import React from 'react';
import { addWeapon } from '../../formUtils/addWeapon';

export const Weapons: React.FC = () => {
  return (
    <div>
      <fieldset id="weapons">
        <legend>Weapons</legend>
      </fieldset>
      <div className="add">
        <button
          type="button"
          onClick={() => {
            addWeapon();
          }}
        >
          Add weapon
        </button>
      </div>
    </div>
  );
};
