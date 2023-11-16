import { merge } from 'lodash';
import React, { useState } from 'react';
import { AccordionList, Checkbox, UsesTracker } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { useRawCharacter } from '../../../hooks/useRawCharacter';
import { useStoreCharacter } from '../../../hooks/useStoreCharacter';
import { SpellLevel } from '../../../types';

const base = {} as Record<SpellLevel, number>;

export const Spells: React.FC = () => {
  const character = useCharacter();
  const rawCharacter = useRawCharacter();
  const storeCharacter = useStoreCharacter();
  const levels = Object.keys(character.spells) as SpellLevel[];
  const [toggleAll, setToggleAll] = useState<Record<SpellLevel, number>>(
    levels.reduce<Record<SpellLevel, number>>(
      (acc, lvl) => ({ ...acc, [lvl]: 0 }),
      base,
    ),
  );
  const blocksPerCol = Math.ceil(levels.length / 3);
  const columns = [0, 1, 2].map((col) =>
    levels.slice(col * blocksPerCol, col * blocksPerCol + blocksPerCol),
  );
  return (
    <div className="spells mb-4">
      {columns.map((colLevels) => (
        <div key={colLevels[0]}>
          {colLevels.map((level) => (
            <div key={level} className="bordered-box mb-1">
              <div className="flex col align-center">
                <button
                  type="button"
                  className="label-1"
                  onClick={() => {
                    setToggleAll({
                      ...toggleAll,
                      [level]: Date.now(),
                    });
                  }}
                >
                  {level === '0' ? 'Cantrips' : `Level ${level}`}
                </button>
                {character.spells[level]?.total ? (
                  <UsesTracker
                    total={character.spells[level]?.total ?? 0}
                    remaining={character.spells[level]?.remaining ?? 0}
                    toggleUse={(used) => {
                      const newCharacter = merge({}, rawCharacter);
                      const spells = newCharacter.spells[level];
                      if (!spells) {
                        return;
                      }
                      const total = spells.total ?? 0;
                      const remaining = spells.remaining ?? 0;
                      spells.remaining = used
                        ? Math.max(0, remaining - 1)
                        : Math.min(total, remaining + 1);
                      storeCharacter(newCharacter);
                    }}
                  />
                ) : null}
              </div>
              <AccordionList
                accordions={
                  character.spells[level]?.spells.map((spell, i) => ({
                    id: `${level}-${spell.name}`,
                    title: (
                      <div className="mr-1 value-2 flex align-center">
                        {spell.name}
                      </div>
                    ),
                    action: (
                      <Checkbox
                        ariaLabel="Prepared"
                        checked={!!spell.prepared}
                        onChange={(e) => {
                          const newCharacter = merge({}, rawCharacter);
                          const spell = newCharacter.spells[level]?.spells[i];
                          if (!spell) {
                            return;
                          }
                          spell.prepared = e.currentTarget.checked;
                          storeCharacter(newCharacter);
                        }}
                      />
                    ),
                    content: <div className="value-3">{spell.notes}</div>,
                  })) ?? []
                }
                toggleAll={toggleAll[level]}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
