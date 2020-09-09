import Pokemon from "./pokemon.js";
import {countBtn, logFight, random} from "./utilits.js";

class Game {
    getPokemon = async () => {
        const res = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const body = await res.json();
        return body;
    }

    fetchDamage = async (attackerID, defenderID, attackID = 0) => {
        const requestString = `https://reactmarathon-api.netlify.app/api/fight?player1id=${attackerID}&attackId=${attackID}&player2id=${defenderID}`;
        const response = await fetch(requestString);
        const answer =  await response.json();
        return(answer);
    }

    start = async () => {
        let pokemon = await this.getPokemon();

        const player1 = new Pokemon({
            ...pokemon,
            selectors: 'player-1',
        });
        pokemon = await this.getPokemon();

        const player2 = new Pokemon({
            ...pokemon,
            selectors: 'player-2',
        });
        console.log(player1);

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
                let kickAnswer = this.fetchDamage(player1.id, player2.id, item.id);
                kickAnswer.then(function (answer) {
                    let {kick: {player1: damageP1, player2: damageP2}} = answer;
                    player1.attackBot(damageP1, function (count) {
                            logFight(player1, player2, count);
                        });
                        player2.changeHp($btn, damageP2, function (count) {
                            logFight(player2, player1, count);
                        });
                })

            });



        });


    }
}
export default Game;

