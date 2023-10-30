import React, { useState } from 'react';
import { AccordionList } from '../../../components';
import { useCharacter } from '../../../hooks/useCharacter';
import { SpellLevel } from '../../../types';

const base = {} as Record<SpellLevel, number>;

export const Spells: React.FC = () => {
  const character = useCharacter();
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
              <div className="label-1">
                <button
                  type="button"
                  onClick={() => {
                    setToggleAll({
                      ...toggleAll,
                      [level]: Date.now(),
                    });
                  }}
                >
                  {level === '0' ? 'Cantrips' : `Level ${level}`}
                </button>
              </div>
              <div className="label-1">
                {level !== '0' && (
                  <>
                    {character.spells[level]?.remaining ?? 0} /{' '}
                    {character.spells[level]?.total ?? 0}
                  </>
                )}
              </div>
              <AccordionList
                accordions={
                  character.spells[level]?.spells.map((spell) => ({
                    id: `${level}-${spell.name}`,
                    title: (
                      <div className="mr-1 value-2 flex align-center">
                        {spell.name}
                        <input
                          type="checkbox"
                          aria-disabled
                          checked={spell.prepared}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                          }}
                        />
                      </div>
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
