import { capitalize } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABILITIES, DICE, SKILLS } from '../../types';
import './Create.scss';
import { Equipment } from './Equipment';
import { Features } from './Features';
import { Proficiencies } from './Proficiencies';
import { Spells } from './Spells';
import { Weapons } from './Weapons';
import { getOnSubmit } from './getOnSubmit';

export const Create: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="character-create">
      <section>
        <form onSubmit={getOnSubmit(navigate)}>
          <div className="save">
            <button type="submit">SAVE</button>
          </div>
          <div className="grid-a">
            <label>
              <span>Campaign</span>
              <input name="campaign" id="campaign" required />
            </label>
            <label>
              <span>Character Name</span>
              <input name="name" id="name" required />
            </label>
            <label>
              <span>Level</span>
              <input
                name="level"
                id="level"
                type="number"
                step="1"
                min="1"
                max="20"
                required
              />
            </label>
            <label>
              <span>Race</span>
              <input name="race" id="race" required />
            </label>
            <label>
              <span>Class</span>
              <input name="klass" id="klass" required />
            </label>
            <label>
              <span>Subclass</span>
              <input name="subKlass" id="subKlass" />
            </label>
            <label>
              <span>Background</span>
              <input name="background" id="background" required />
            </label>
          </div>
          <div className="grid-b">
            <fieldset>
              <legend>AC</legend>
              <label>
                <span>AC</span>
                <input
                  name="armorClass.ac"
                  id="armorClass.ac"
                  type="number"
                  step="1"
                  min="0"
                  required
                />
              </label>
              <label>
                <span>Notes</span>
                <textarea name="armorClass.notes" id="armorClass.notes" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Initiative</legend>
              <label>
                <span>Bonus</span>
                <input
                  name="initiative.additionalBonus"
                  id="initiative.additionalBonus"
                  type="number"
                  step="1"
                  required
                />
              </label>
              <label>
                <span>Notes</span>
                <textarea name="initiative.notes" id="initiative.notes" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Speed</legend>
              <label>
                <span>Feet</span>
                <input
                  name="speed.feet"
                  id="speed.feet"
                  type="number"
                  step="5"
                  min="0"
                  required
                />
              </label>
              <label>
                <span>Notes</span>
                <textarea name="speed.notes" id="speed.notes" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Health</legend>
              <label>
                <span>Hit Die</span>
                <select name="hitDie" id="hitDie">
                  {DICE.map((die) => (
                    <option key={die} value={die}>
                      {die}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Max</span>
                <input
                  name="health.max"
                  id="health.max"
                  type="number"
                  step="1"
                  min="1"
                  required
                />
              </label>
            </fieldset>
          </div>
          <fieldset>
            <legend>Ability Scores</legend>
            {ABILITIES.map((ability) => (
              <label key={ability}>
                <span>{capitalize(ability)}</span>
                <input
                  name={`abilityScores.${ability}`}
                  id={`abilityScores.${ability}`}
                  type="number"
                  step="1"
                  min="0"
                  max="30"
                  required
                />
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Saving Throws</legend>
            {ABILITIES.map((ability) => (
              <fieldset key={ability}>
                <legend>{capitalize(ability)}</legend>
                <label>
                  <span>Proficient</span>
                  <input
                    name={`saves.${ability}.proficient`}
                    id={`saves.${ability}.proficient`}
                    type="checkbox"
                  />
                </label>
                <label>
                  <span>Bonus</span>
                  <input
                    name={`saves.${ability}.additionalBonus`}
                    id={`saves.${ability}.additionalBonus`}
                    type="number"
                    step="1"
                  />
                </label>
                <label>
                  <span>Notes</span>
                  <textarea
                    name={`saves.${ability}.notes`}
                    id={`saves.${ability}.notes`}
                  />
                </label>
              </fieldset>
            ))}
          </fieldset>
          <fieldset>
            <legend>Skills</legend>
            {SKILLS.map((skill) => (
              <fieldset key={skill}>
                <legend>{capitalize(skill)}</legend>
                <label>
                  <span>Proficient</span>
                  <input
                    name={`skills.${skill}.proficient`}
                    id={`skills.${skill}.proficient`}
                    type="checkbox"
                  />
                </label>
                <label>
                  <span>Bonus</span>
                  <input
                    name={`skills.${skill}.additionalBonus`}
                    id={`skills.${skill}.additionalBonus`}
                    type="number"
                    step="1"
                  />
                </label>
                <label>
                  <span>Notes</span>
                  <textarea
                    name={`skills.${skill}.notes`}
                    id={`skills.${skill}.notes`}
                  />
                </label>
              </fieldset>
            ))}
          </fieldset>
          <Features />
          <Weapons />
          <Equipment />
          <Proficiencies />
          <label>
            <span>Spellcasting Ability</span>
            <select name="dc.ability" id="dc.ability">
              {ABILITIES.map((ability) => (
                <option key={ability} value={ability}>
                  {capitalize(ability)}
                </option>
              ))}
            </select>
          </label>
          {new Array(10).fill(null).map((_, i) => (
            <Spells key={i.toString()} level={i.toString()} />
          ))}
        </form>
      </section>
    </main>
  );
};
