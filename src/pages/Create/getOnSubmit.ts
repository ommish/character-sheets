import { FormEventHandler } from 'react';
import { NavigateFunction } from 'react-router-dom';
import {
  ABILITY_ID,
  ADD_TO_HIT_ID,
  BONUS_ID,
  COUNT_ID,
  DAMAGE_ID,
  DIE_ID,
  EQUIPMENT_ID,
  FEATURES_ID,
  NAME_ID,
  NOTES_ID,
  PROFICIENCIES_ID,
  PROFICIENT_ID,
  SPELL_LIST_ID,
  TYPE_ID,
  WEAPONS_ID,
  WEAPONS_N_DAMAGE_O_ID,
  WEAPONS_N_ID,
} from '../../formUtils/formIds';
import { getElement } from '../../formUtils/getElement';
import { newArray } from '../../formUtils/newArray';
import {
  ABILITIES,
  Abilities,
  Ability,
  CURRENCIES,
  Character,
  DamageType,
  Die,
  Money,
  PROFICIENCIES,
  Proficiencies,
  SKILLS,
  SPELL_LEVELS,
  Spells,
  StatusEffect,
} from '../../types';

export const getOnSubmit =
  (
    storeCharacter: (newCharacter: Character) => void,
    navigate: NavigateFunction,
  ): FormEventHandler =>
  (e) => {
    e.preventDefault();

    const campaign = (getElement('campaign') as HTMLInputElement).value;

    const name = (getElement('name') as HTMLInputElement).value;

    const level =
      parseInt((getElement('level') as HTMLInputElement).value) || 1;

    const race = (getElement('race') as HTMLInputElement).value;

    const klass = (getElement('klass') as HTMLInputElement).value;

    const subKlass = (getElement('subKlass') as HTMLInputElement).value;

    const background = (getElement('background') as HTMLInputElement).value;

    const inspiration = (getElement('inspiration') as HTMLInputElement).checked;

    const speed = {
      feet: parseInt((getElement('speed.feet') as HTMLInputElement).value) || 0,
      notes: (getElement('speed.notes') as HTMLInputElement).value,
    };

    const armorClass = {
      ac:
        parseInt((getElement('armorClass.ac') as HTMLInputElement).value) || 0,
      notes: (getElement('armorClass.notes') as HTMLInputElement).value,
    };

    const initiative = {
      additionalBonus:
        parseInt(
          (getElement('initiative.additionalBonus') as HTMLInputElement).value,
        ) || null,
      notes: (getElement('initiative.notes') as HTMLInputElement).value,
    };

    const statusEffectsOptions = (
      getElement('statusEffects') as HTMLSelectElement
    ).selectedOptions;
    const statusEffects = newArray(statusEffectsOptions.length).map(
      (_, i) => statusEffectsOptions.item(i)?.value as StatusEffect,
    );

    const maxHealth =
      parseInt((getElement('health.max') as HTMLInputElement).value) || 0;
    const currentHealth = (getElement('health.current') as HTMLInputElement)
      .value;
    const tempHealth = (getElement('health.temp') as HTMLInputElement).value;
    const hitDice = (getElement('health.dice') as HTMLInputElement).value;

    const health = {
      max: parseInt((getElement('health.max') as HTMLInputElement).value) || 0,
      current: currentHealth ? parseInt(currentHealth) || 0 : maxHealth,
      temp: tempHealth ? parseInt(tempHealth) || 0 : null,
      dice: hitDice ? parseInt(hitDice) || 0 : level,
    };

    const money = CURRENCIES.reduce<Money>(
      (acc, cr) => ({
        ...acc,
        [cr]:
          parseInt((getElement(`money.${cr}`) as HTMLInputElement).value) ||
          null,
      }),
      {} as Money,
    );

    const hitDie = (getElement('hitDie') as HTMLInputElement).value as Die;

    const abilityScores = ABILITIES.reduce<Abilities>(
      (acc, ability) => ({
        ...acc,
        [ability]:
          parseInt(
            (getElement(`abilityScores.${ability}`) as HTMLInputElement).value,
          ) || 0,
      }),
      {} as Abilities,
    );

    const skills = SKILLS.reduce(
      (acc, skill) => ({
        ...acc,
        [skill]: {
          proficient: (
            getElement(`skills.${skill}.proficient`) as HTMLInputElement
          ).checked,
          additionalBonus:
            parseInt(
              (
                getElement(
                  `skills.${skill}.additionalBonus`,
                ) as HTMLInputElement
              ).value,
            ) || 0,
          notes: (getElement(`skills.${skill}.notes`) as HTMLInputElement)
            .value,
        },
      }),
      {},
    );

    const saves = ABILITIES.reduce(
      (acc, ability) => ({
        ...acc,
        [ability]: {
          proficient: (
            getElement(`saves.${ability}.proficient`) as HTMLInputElement
          ).checked,
          additionalBonus:
            parseInt(
              (
                getElement(
                  `saves.${ability}.additionalBonus`,
                ) as HTMLInputElement
              ).value,
            ) || 0,
          notes: (getElement(`saves.${ability}.notes`) as HTMLInputElement)
            .value,
        },
      }),
      {},
    );

    const proficiencies = PROFICIENCIES.reduce<Proficiencies>(
      (acc, proficiency) => ({
        ...acc,
        [proficiency]: [],
      }),
      {} as Proficiencies,
    );
    PROFICIENCIES.forEach((proficiency) => {
      proficiencies[proficiency] = newArray(
        getElement(PROFICIENCIES_ID(proficiency)).children.length - 1,
      ).map((_, i) => ({
        name: (
          getElement(
            `proficiencies.${proficiency}.${i}.name`,
          ) as HTMLInputElement
        ).value,
        notes: (
          getElement(
            `proficiencies.${proficiency}.${i}.notes`,
          ) as HTMLInputElement
        ).value,
      }));
    });

    const equipment = newArray(
      getElement(EQUIPMENT_ID()).children.length - 1,
    ).map((_, i) => ({
      name: (getElement(`equipment.${i}.name`) as HTMLInputElement).value,
      notes: (getElement(`equipment.${i}.notes`) as HTMLInputElement).value,
    }));

    const features = newArray(
      getElement(FEATURES_ID()).children.length - 1,
    ).map((_, i) => {
      const totalUses = parseInt(
        (getElement(`features.${i}.uses.total`) as HTMLInputElement).value,
      );
      const remainingUses = parseInt(
        (getElement(`features.${i}.uses.remaining`) as HTMLInputElement).value,
      );
      return {
        name: (getElement(`features.${i}.name`) as HTMLInputElement).value,
        description: (
          getElement(`features.${i}.description`) as HTMLInputElement
        ).value,
        uses: totalUses
          ? {
              total: totalUses,
              remaining: remainingUses || totalUses,
            }
          : null,
      };
    });

    const weapons = newArray(getElement(WEAPONS_ID()).children.length - 1).map(
      (_, i) => ({
        name: (getElement(NAME_ID(WEAPONS_N_ID(i))) as HTMLInputElement).value,
        proficient: (
          getElement(PROFICIENT_ID(WEAPONS_N_ID(i))) as HTMLInputElement
        ).checked,
        ability: (getElement(ABILITY_ID(WEAPONS_N_ID(i))) as HTMLInputElement)
          .value as Ability,
        damage: newArray(
          getElement(DAMAGE_ID(WEAPONS_N_ID(i))).children.length - 1,
        ).map((_, j) => ({
          die: (
            getElement(DIE_ID(WEAPONS_N_DAMAGE_O_ID(i, j))) as HTMLInputElement
          ).value as Die,
          count:
            parseInt(
              (
                getElement(
                  COUNT_ID(WEAPONS_N_DAMAGE_O_ID(i, j)),
                ) as HTMLInputElement
              ).value,
            ) || 0,
          bonus:
            parseInt(
              (
                getElement(
                  BONUS_ID(WEAPONS_N_DAMAGE_O_ID(i, j)),
                ) as HTMLInputElement
              ).value,
            ) || 0,
          type: (
            getElement(TYPE_ID(WEAPONS_N_DAMAGE_O_ID(i, j))) as HTMLInputElement
          ).value as DamageType,
        })),
        additionalToHit:
          parseInt(
            (getElement(ADD_TO_HIT_ID(WEAPONS_N_ID(i))) as HTMLInputElement)
              .value,
          ) || 0,
        notes: (getElement(NOTES_ID(WEAPONS_N_ID(i))) as HTMLInputElement)
          .value,
      }),
    );

    const dc = {
      ability: (getElement('dc.ability') as HTMLInputElement).value as Ability,
    };
    const spells: Spells = {};
    let showSpells = false;
    SPELL_LEVELS.forEach((level) => {
      const spellsList = newArray(
        getElement(SPELL_LIST_ID(level.toString())).children.length - 1,
      );
      if (spellsList.length) {
        showSpells = true;
        const total =
          level === 0
            ? null
            : parseInt(
                (getElement(`spells.${level}.total`) as HTMLInputElement).value,
              ) || 0;
        spells[level] = {
          total,
          remaining: total
            ? parseInt(
                (getElement(`spells.${level}.remaining`) as HTMLInputElement)
                  .value,
              ) || total
            : null,
          spells: spellsList.map((_, i) => ({
            name: (
              getElement(`spells.${level}.spells.${i}.name`) as HTMLInputElement
            ).value,
            notes: (
              getElement(
                `spells.${level}.spells.${i}.notes`,
              ) as HTMLInputElement
            ).value,
            prepared: (
              getElement(
                `spells.${level}.spells.${i}.prepared`,
              ) as HTMLInputElement
            ).checked,
          })),
        };
      }
    });

    const character: Character = {
      campaign,
      name,
      level,
      race,
      klass,
      subKlass,
      inspiration,
      background,
      abilityScores,
      statusEffects,
      health,
      hitDie,
      speed,
      armorClass,
      initiative,
      skills,
      saves,
      proficiencies,
      weapons,
      features,
      equipment,
      deathSaves: {
        successes: 0,
        failures: 0,
      },
      money,
      showSpells,
      dc,
      spells,
    };

    storeCharacter(character);

    navigate(`/${character.name}`);
  };
