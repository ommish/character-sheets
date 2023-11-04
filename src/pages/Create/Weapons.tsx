import React from 'react';
import { addWeapon } from '../../formUtils/addWeapon';

export const Weapons: React.FC = () => {
  return (
    <>
      <fieldset className="weapons" id="weapons">
        <legend>Weapons</legend>
      </fieldset>
      <div className="add">
        <button
          className="weapons"
          type="button"
          onClick={() => {
            addWeapon();
          }}
        >
          Add weapon
        </button>
      </div>
    </>
  );
};
