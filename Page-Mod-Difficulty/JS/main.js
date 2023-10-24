document.querySelectorAll('.no-js').forEach((element) => {element.classList.remove("no-js")});

const DIFFICULTIES = {
    glaneur: {zombieDamageMult: 0.5, playerDamageMult: 2},
    aventurier: {zombieDamageMult: 0.75, playerDamageMult: 1.5},
    nomade: {zombieDamageMult: 1, playerDamageMult: 1},
    guerrier: {zombieDamageMult: 1.5, playerDamageMult: 0.83},
    survivaliste: {zombieDamageMult: 2, playerDamageMult: 0.66},
    extreme: {zombieDamageMult: 2.5, playerDamageMult: 0.5}
};

const ZOMBIES = {
    zombieArlene: {baseDamage: 10, experience: 400},
    zombieArleneFeral: {baseDamage: 20, experience: 750},
    zombieArleneRadiated: {baseDamage: 20, experience: 1200}
}

const DIFFICULTY_SELECTOR = document.querySelector('#difficulty-selector');
const WEAPON_DAMAGE_SELECTOR = document.querySelector('#weapon-damage-selector');
const ENTITY_DAMAGE_SELECTOR = document.querySelector('#entity-damage-selector');
const ZOMBIE_DAMAGE_SELECTOR = document.querySelector('#zombie-damage-selector');
const EXP_MULTIPLIER_SELECTOR = document.querySelector('#exp-multiplier-selector');

const DEFAULT_OUTPUTS = document.querySelectorAll('#default-outputs > td');
const FERAL_OUTPUTS = document.querySelectorAll('#feral-outputs > td');
const RADIATED_OUTPUTS = document.querySelectorAll('#radiated-outputs > td');
const OUTPUTS = [DEFAULT_OUTPUTS, FERAL_OUTPUTS, RADIATED_OUTPUTS];

document.querySelector('#validate-button').addEventListener('click', () => {
    if(document.querySelectorAll(":invalid").length > 0) {alert("Un ou plusieurs des champs renseignés sont invalides, veuillez réessayer"); return;}

    const DIFFICULTY = DIFFICULTY_SELECTOR.value;
    const WEAPON_DAMAGE = Number(WEAPON_DAMAGE_SELECTOR.value);
    const ENTITY_DAMAGE_MULTIPLIER = ENTITY_DAMAGE_SELECTOR.value / 100 + 1;
    const ZOMBIE_DAMAGE_PER_HIT = ZOMBIE_DAMAGE_SELECTOR.value;
    const EXP_MULTIPLIER = EXP_MULTIPLIER_SELECTOR.value / 100 + 1;

    const PLAYER_DAMAGE = WEAPON_DAMAGE * DIFFICULTIES[DIFFICULTY].playerDamageMult * ENTITY_DAMAGE_MULTIPLIER;

    Object.values(ZOMBIES).forEach((ZOMBIE, index) => {
        const PLAYER_DAMAGE_OUTPUT = OUTPUTS[index][0]
        const ZOMBIE_DAMAGE_OUTPUT = OUTPUTS[index][1]
        const ZOMBIE_EXP_OUTPUT = OUTPUTS[index][2]

        PLAYER_DAMAGE_OUTPUT.innerText = Number(PLAYER_DAMAGE.toFixed(1));
        ZOMBIE_DAMAGE_OUTPUT.innerText = Number(ZOMBIE.baseDamage / ZOMBIES.zombieArlene.baseDamage  * ZOMBIE_DAMAGE_PER_HIT * DIFFICULTIES[DIFFICULTY].zombieDamageMult);
        ZOMBIE_EXP_OUTPUT.innerText = Number(ZOMBIE.experience * EXP_MULTIPLIER.toFixed(1));
    })
})