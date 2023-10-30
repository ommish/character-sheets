import { FormEventHandler } from 'react';
import { storeCharacter } from '../../data/store';
import {
  ABILITIES,
  Abilities,
  Ability,
  Character,
  DamageType,
  Die,
  PROFICIENCIES,
  Proficiencies,
  SKILLS,
  SPELL_LEVELS,
  Spells,
  StatusEffect,
} from '../../types';
import { NavigateFunction } from 'react-router-dom';

export const getOnSubmit =
  (navigate: NavigateFunction): FormEventHandler =>
  (e) => {
    e.preventDefault();

    const campaign = (document.getElementById('campaign') as HTMLInputElement)
      .value;

    const name = (document.getElementById('name') as HTMLInputElement).value;

    const level = parseInt(
      (document.getElementById('level') as HTMLInputElement).value,
    );

    const race = (document.getElementById('race') as HTMLInputElement).value;

    const klass = (document.getElementById('klass') as HTMLInputElement).value;

    const subKlass = (document.getElementById('subKlass') as HTMLInputElement)
      .value;

    const background = (
      document.getElementById('background') as HTMLInputElement
    ).value;

    const speed = {
      feet: parseInt(
        (document.getElementById('speed.feet') as HTMLInputElement).value,
      ),
      notes: (document.getElementById('speed.notes') as HTMLInputElement).value,
    };

    const armorClass = {
      ac: parseInt(
        (document.getElementById('armorClass.ac') as HTMLInputElement).value,
      ),
      notes: (document.getElementById('armorClass.notes') as HTMLInputElement)
        .value,
    };

    const initiative = {
      additionalBonus: parseInt(
        (
          document.getElementById(
            'initiative.additionalBonus',
          ) as HTMLInputElement
        ).value,
      ),
      notes: (document.getElementById('initiative.notes') as HTMLInputElement)
        .value,
    };

    const health = {
      max: parseInt(
        (document.getElementById('health.max') as HTMLInputElement).value,
      ),
      current: undefined,
      temp: 0,
      dice: undefined,
    };

    const hitDie = (document.getElementById('hitDie') as HTMLInputElement)
      .value as Die;

    const statusEffects: StatusEffect[] = [];

    const abilityScores = ABILITIES.reduce<Abilities>(
      (acc, ability) => ({
        ...acc,
        [ability]: parseInt(
          (
            document.getElementById(
              `abilityScores.${ability}`,
            ) as HTMLInputElement
          ).value,
        ),
      }),
      {} as Abilities,
    );

    const skills = SKILLS.reduce(
      (acc, skill) => ({
        ...acc,
        [skill]: {
          proficient: (
            document.getElementById(
              `skills.${skill}.proficient`,
            ) as HTMLInputElement
          ).checked,
          additionalBonus:
            parseInt(
              (
                document.getElementById(
                  `skills.${skill}.additionalBonus`,
                ) as HTMLInputElement
              ).value,
            ) || 0,
          notes: (
            document.getElementById(`skills.${skill}.notes`) as HTMLInputElement
          ).value,
        },
      }),
      {},
    );

    const saves = ABILITIES.reduce(
      (acc, ability) => ({
        ...acc,
        [ability]: {
          proficient: (
            document.getElementById(
              `saves.${ability}.proficient`,
            ) as HTMLInputElement
          ).checked,
          additionalBonus:
            parseInt(
              (
                document.getElementById(
                  `saves.${ability}.additionalBonus`,
                ) as HTMLInputElement
              ).value,
            ) || 0,
          notes: (
            document.getElementById(
              `saves.${ability}.notes`,
            ) as HTMLInputElement
          ).value,
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
      proficiencies[proficiency] = new Array(
        document.getElementById(`proficiencies.${proficiency}`)!.children
          .length - 1,
      )
        .fill(null)
        .map((_, i) => ({
          name: (
            document.getElementById(
              `proficiencies.${proficiency}.${i}.name`,
            ) as HTMLInputElement
          ).value,
          notes: (
            document.getElementById(
              `proficiencies.${proficiency}.${i}.notes`,
            ) as HTMLInputElement
          ).value,
        }));
    });

    const equipment = new Array(
      document.getElementById('equipment')!.children.length - 1,
    )
      .fill(null)
      .map((_, i) => ({
        name: (
          document.getElementById(`equipment.${i}.name`) as HTMLInputElement
        ).value,
        notes: (
          document.getElementById(`equipment.${i}.notes`) as HTMLInputElement
        ).value,
      }));

    const features = new Array(
      document.getElementById('features')!.children.length - 1,
    )
      .fill(null)
      .map((_, i) => ({
        name: (
          document.getElementById(`features.${i}.name`) as HTMLInputElement
        ).value,
        description: (
          document.getElementById(
            `features.${i}.description`,
          ) as HTMLInputElement
        ).value,
        remainingUses: null,
      }));
    console.log('features', features);

    const weapons = new Array(
      document.getElementById('weapons')!.children.length - 1,
    )
      .fill(null)
      .map((_, i) => ({
        name: (document.getElementById(`weapons.${i}.name`) as HTMLInputElement)
          .value,
        proficient: (
          document.getElementById(`weapons.${i}.proficient`) as HTMLInputElement
        ).checked,
        ability: (
          document.getElementById(`weapons.${i}.ability`) as HTMLInputElement
        ).value as Ability,
        damage: {
          die: (
            document.getElementById(
              `weapons.${i}.damage.die`,
            ) as HTMLInputElement
          ).value as Die,
          count:
            parseInt(
              (
                document.getElementById(
                  `weapons.${i}.damage.count`,
                ) as HTMLInputElement
              ).value,
            ) || 0,
          type: (
            document.getElementById(
              `weapons.${i}.damage.type`,
            ) as HTMLInputElement
          ).value as DamageType,
        },
        additionalToHit:
          parseInt(
            (
              document.getElementById(
                `weapons.${i}.additionalToHit`,
              ) as HTMLInputElement
            ).value,
          ) || 0,
        additionalDamage:
          parseInt(
            (
              document.getElementById(
                `weapons.${i}.additionalDamage`,
              ) as HTMLInputElement
            ).value,
          ) || 0,
        remainingUses: null,
        notes: (
          document.getElementById(`weapons.${i}.notes`) as HTMLInputElement
        ).value,
      }));

    const dc = {
      ability: (document.getElementById('dc.ability') as HTMLInputElement)
        .value as Ability,
    };
    const spells: Spells = {};
    let showSpells = false;
    SPELL_LEVELS.forEach((level) => {
      const spellsList = new Array(
        document.getElementById(`spells.${level}.spells`)!.children.length - 1,
      ).fill(null);
      if (spellsList.length) {
        showSpells = true;
        spells[level] = {
          total:
            level === 0
              ? null
              : parseInt(
                  (
                    document.getElementById(
                      `spells.${level}.total`,
                    ) as HTMLInputElement
                  ).value,
                ),
          remaining: null,
          spells: spellsList.map((_, i) => ({
            name: (
              document.getElementById(
                `spells.${level}.spells.${i}.name`,
              ) as HTMLInputElement
            ).value,
            notes: (
              document.getElementById(
                `spells.${level}.spells.${i}.notes`,
              ) as HTMLInputElement
            ).value,
            prepared: (
              document.getElementById(
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
      inspiration: false,
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
      money: {
        copper: null,
        silver: null,
        gold: null,
        platinum: null,
      },
      showSpells,
      dc,
      spells,
    };

    storeCharacter(character);
    const json = URL.createObjectURL(
      new Blob([JSON.stringify(character, null, 2)], {
        type: 'application/json',
      }),
    );

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = json;
    a.download = `${character.name}---${new Date().toDateString()}.json`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(json);

    navigate(`/${character.name}`);
  };
