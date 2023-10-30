import React, { useState } from 'react';
import { AccordionList } from '../../../components';
import { useCharacter } from '../../useCharacter';

export const Features: React.FC = () => {
  const character = useCharacter();
  const [toggleAll, setToggleAll] = useState(0);
  return (
    <div className="bordered-box mt-1">
      <AccordionList
        accordions={character.features.map((fe) => ({
          id: fe.name,
          title: (
            <div className="mr-1 value-2 flex align-center">
              {fe.name}{' '}
              {fe.remainingUses !== null && (
                <span className="text-light-1 text-smallest">
                  Remaining uses: {fe.remainingUses}
                </span>
              )}
            </div>
          ),
          content: <div className="value-3">{fe.description}</div>,
        }))}
        toggleAll={toggleAll}
      />
      <div className="label-1 mt-1">
        <button type="button" onClick={() => setToggleAll(Date.now())}>
          Features & Traits
        </button>
      </div>
    </div>
  );
};
