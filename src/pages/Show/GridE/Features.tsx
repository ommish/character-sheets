import React, { useState } from 'react';
import { AccordionList, UsesTracker } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { getStoredCharacter, storeCharacter } from '../../../data/store';

export const Features: React.FC = () => {
  const character = useCharacter();
  const [toggleAll, setToggleAll] = useState(0);
  return (
    <div className="bordered-box mt-1">
      <AccordionList
        accordions={character.features.map((fe, i) => ({
          id: fe.name,
          title: (
            <div className="mr-1 value-2 flex align-center">{fe.name}</div>
          ),
          action: fe.uses && (
            <UsesTracker
              total={fe.uses.total}
              remaining={fe.uses.remaining}
              toggleUse={(used) => {
                const newCharacter = { ...getStoredCharacter(character.name) };
                const uses = newCharacter.features[i].uses;
                if (!uses) {
                  return;
                }
                newCharacter.features[i].uses = {
                  total: uses.total,
                  remaining: used
                    ? Math.max(0, uses.remaining - 1)
                    : Math.min(uses.total, uses.remaining + 1),
                };
                storeCharacter(newCharacter);
              }}
            />
          ),
          content: <div className="value-3">{fe.description}</div>,
        }))}
        toggleAll={toggleAll}
      />
      <div className="label-1 mt-1">
        <button
          type="button"
          onClick={() => {
            setToggleAll(Date.now());
          }}
        >
          Features & Traits
        </button>
      </div>
    </div>
  );
};
