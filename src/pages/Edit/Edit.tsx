import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ABILITIES, PROFICIENCIES, SKILLS, SPELL_LEVELS } from '../../types';
import { useCharacters } from '../../hooks/useCharacters';
import { Create } from '../Create';
import { addEquipment } from '../../formUtils/addEquipment';
import { addFeature } from '../../formUtils/addFeature';
import { addProficiency } from '../../formUtils/addProficiency';
import { addSpell } from '../../formUtils/addSpell';
import { addWeapon } from '../../formUtils/addWeapon';
import { Who } from '../Who';
import './Edit.scss';

export const Edit: React.FC = () => {
  const { name } = useParams();

  const character = useCharacters().find((ch) => ch.name === name);

  if (!character) {
    return <Who />;
  }

  // eslint-disable-next-line
  useEffect(() => {
    (document.getElementById('campaign') as HTMLInputElement).value =
      character.campaign;
    (document.getElementById('name') as HTMLInputElement).value =
      character.name;
    (document.getElementById('level') as HTMLInputElement).value =
      character.level.toString();
    (document.getElementById('race') as HTMLInputElement).value =
      character.race;
    (document.getElementById('klass') as HTMLInputElement).value =
      character.klass;
    (document.getElementById('subKlass') as HTMLInputElement).value =
      character.subKlass;
    (document.getElementById('background') as HTMLInputElement).value =
      character.background;
    (document.getElementById('speed.feet') as HTMLInputElement).value =
      character.speed.feet.toString();
    (document.getElementById('speed.notes') as HTMLInputElement).value =
      character.speed.notes ?? '';
    (document.getElementById('armorClass.ac') as HTMLInputElement).value =
      character.armorClass.ac.toString();
    (document.getElementById('armorClass.notes') as HTMLInputElement).value =
      character.armorClass.notes ?? '';
    (
      document.getElementById('initiative.additionalBonus') as HTMLInputElement
    ).value = character.initiative.additionalBonus.toString();
    (document.getElementById('initiative.notes') as HTMLInputElement).value =
      character.initiative.notes ?? '';

    (document.getElementById('health.max') as HTMLInputElement).value =
      character.health.max.toString();

    (document.getElementById('hitDie') as HTMLInputElement).value =
      character.hitDie;

    ABILITIES.forEach((ability) => {
      (
        document.getElementById(`abilityScores.${ability}`) as HTMLInputElement
      ).value = character.abilityScores[ability].toString();
    });
    SKILLS.forEach((skill) => {
      (
        document.getElementById(
          `skills.${skill}.proficient`,
        ) as HTMLInputElement
      ).checked = !!character.skills[skill]?.proficient;
      (
        document.getElementById(
          `skills.${skill}.additionalBonus`,
        ) as HTMLInputElement
      ).value = character.skills[skill]?.additionalBonus?.toString() ?? '';
      (
        document.getElementById(`skills.${skill}.notes`) as HTMLInputElement
      ).value = character.skills[skill]?.notes ?? '';
    });
    ABILITIES.forEach((save) => {
      (
        document.getElementById(`saves.${save}.proficient`) as HTMLInputElement
      ).checked = !!character.saves[save]?.proficient;
      (
        document.getElementById(
          `saves.${save}.additionalBonus`,
        ) as HTMLInputElement
      ).value = character.saves[save]?.additionalBonus?.toString() ?? '';
      (
        document.getElementById(`saves.${save}.notes`) as HTMLInputElement
      ).value = character.saves[save]?.notes ?? '';
    });
    PROFICIENCIES.forEach((category) => {
      character.proficiencies[category].forEach((proficiency) => {
        addProficiency(category, proficiency);
      });
    });

    character.weapons.forEach((weapon) => {
      addWeapon(weapon);
    });

    character.features.forEach((feature) => {
      addFeature(feature);
    });

    character.equipment.forEach((equipment) => {
      addEquipment(equipment);
    });

    (document.getElementById('dc.ability') as HTMLInputElement).value =
      character.dc.ability;

    SPELL_LEVELS.forEach((level) => {
      const spells = character.spells[level];
      if (spells) {
        if (level !== 0) {
          (
            document.getElementById(`spells.${level}.total`) as HTMLInputElement
          ).value = spells.total?.toString() ?? '';
        }
        spells.spells.forEach((spell) => {
          addSpell(level.toString(), spell);
        });
      }
    });

    // eslint-disable-next-line
  }, []);

  return <Create />;
};
