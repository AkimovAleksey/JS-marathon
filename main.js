import Pokemon from "./pokemon.js";
import {random, countBtn, logFight} from "./utilits.js";
import {pokemons} from './pokemons.js';

const pikachu = pokemons.find(item => item.name === 'Pikachu');
const charmander = pokemons.find(item => item.name === 'Charmander');

const player1 = new Pokemon({
    ...pikachu,
    selectors: 'player-1',
});



const player2 = new Pokemon({
    ...charmander,
    selectors: 'player-2',
});
console.log(player2.hp.current);
const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $control.appendChild($btn);
    $btn.innerText = item.name;
    const $span = document.createElement('span');
    $span.classList.add('kick-span');
    $btn.appendChild($span);

    const btnCount = countBtn(item.maxCount, $btn);

    $btn.addEventListener('click', () => {
        btnCount();
        player2.attackBot(random(player2.attacks[0].minDamage, player2.attacks[0].maxDamage), function (count) {
            logFight(player1, count);
        });
        player1.changeHp($btn, random(item.minDamage, item.maxDamage), function (count) {
            logFight(player2, count);
        });

    });



});

export {player1, player2};