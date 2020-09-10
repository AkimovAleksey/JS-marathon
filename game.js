import {generatePlayer} from "./generatePlayer.js";
import {countBtn, logFight} from "./utilits.js";

class Game {

    fetchDamage = async (attackerID, defenderID, attackID = 0) => {
        const requestString = `https://reactmarathon-api.netlify.app/api/fight?player1id=${attackerID}&attackId=${attackID}&player2id=${defenderID}`;
        const response = await fetch(requestString);
        const answer =  await response.json();
        return(answer);
    }

    start = async () => {

        let player1 = await generatePlayer('player-1');
        let player2 = await generatePlayer('player-2');

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
                if (player1.live && player2.live ) {
                    btnCount();
                    let kickAnswer = this.fetchDamage(player1.id, player2.id, item.id);
                    kickAnswer.then(function (answer) {
                        let {kick: {player1: damageP1, player2: damageP2}} = answer;
                        player1.attackBot(damageP1, function (count) {
                            logFight(player1, player2, count);
                        });
                        player2.changeHp(damageP2, function (count) {
                            logFight(player2, player1, count);
                        });
                    })
                } else if (! player2.live) {
                    player2 = '';
                    player2 = await generatePlayer('player-2');
                    btnCount();
                    let kickAnswer = this.fetchDamage(player1.id, player2.id, item.id);
                    kickAnswer.then(function (answer) {
                        let {kick: {player1: damageP1, player2: damageP2}} = answer;
                        player1.attackBot(damageP1, function (count) {
                            logFight(player1, player2, count);
                        });
                        player2.changeHp(damageP2, function (count) {
                            logFight(player2, player1, count);
                        });
                    })
                }



            });



        });


    }
}
export default Game;

