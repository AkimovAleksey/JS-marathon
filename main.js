import Pokemon from "./pokemon.js";
import {random, countBtn, generateLog, logFight} from "./utilits.js";
import {pokemons} from './pokemons.js';

const pikachu = pokemons.find(item => item.name === 'Pikachu');


const player1 = new Pokemon({
    ...pikachu,
    selectors: 'player-1',
});

console.log(player1);

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 480,
    selectors: 'player-2',
});

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
    })

})


const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick2');
const $btn3 = document.getElementById('btn-kick3');


// $btn.addEventListener("click", function () {
//     const count = countBtn($btn);
//     count();
//     player1.changeHp(random(0, 20), function (count) {
//         logFight(count);
//     });
//     player2.changeHp(random(0, 20), function (count) {
//         logFight(count);
//     });
// })
//
// $btn2.addEventListener("click", function () {
//     const count = countBtn($btn2);
//     count();
//     player1.changeHp(random(10, 30), function (count) {
//         logFight(count);
//     });
//     player2.changeHp(random(10, 30), function (count) {
//         logFight(count);
//     });
// })
//
// $btn3.addEventListener("click", function () {
//     const count = countBtn($btn3);
//     count();
//     player1.changeHp(random(20, 60), function (count) {
//         logFight(count);
//     });
//     player2.changeHp(random(20, 60), function (count) {
//         logFight(count);
//     });
// })

export {player1, player2};




