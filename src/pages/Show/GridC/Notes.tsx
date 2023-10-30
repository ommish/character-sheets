import React from 'react';
import { ABILITIES, PROFICIENCIES, SKILLS } from '../../../types';
import { useCharacter } from '../../../hooks/useCharacter';
import { capitalize, startCase } from 'lodash';
import { InfoCircle } from 'react-bootstrap-icons';

export const Notes: React.FC = () => {
  const character = useCharacter();
  return (
    <div className="bordered-box notes mt-1">
      <div className="label-2">
        Notes
        <InfoCircle className="info-icon" />
      </div>
      {ABILITIES.map(
        (ability) =>
          character.saves[ability].notes && (
            <div key={ability}>
              <span className="label-3">{capitalize(ability)} Save:</span>{' '}
              {character.saves[ability].notes}
            </div>
          ),
      )}
      {SKILLS.map(
        (skill) =>
          character.skills[skill].notes && (
            <div key={skill}>
              <span className="label-3">{startCase(skill)}:</span>{' '}
              {character.skills[skill].notes}
            </div>
          ),
      )}
      {PROFICIENCIES.map((category) =>
        character.proficiencies[category].map(
          (proficiency, i) =>
            proficiency.notes && (
              <div key={`${proficiency.name}.${i}`}>
                <span className="label-3">{proficiency.name}:</span>{' '}
                {proficiency.notes}
              </div>
            ),
        ),
      )}
      {character.armorClass.notes && (
        <div>
          <span className="label-3">AC:</span> {character.armorClass.notes}
        </div>
      )}
      {character.initiative.notes && (
        <div>
          <span className="label-3">Initiative:</span>{' '}
          {character.initiative.notes}
        </div>
      )}
      {character.speed.notes && (
        <div>
          <span className="label-3">Speed:</span> {character.speed.notes}
        </div>
      )}
      {character.weapons.map(
        (weapon, i) =>
          weapon.notes && (
            <div key={`${weapon.name}.${i}`}>
              <span className="label-3">{weapon.name}:</span> {weapon.notes}
            </div>
          ),
      )}
      {character.equipment.map(
        (item, i) =>
          item.notes && (
            <div key={`${item.name}.${i}`}>
              <span className="label-3">{item.name}:</span> {item.notes}
            </div>
          ),
      )}
    </div>
  );
};
