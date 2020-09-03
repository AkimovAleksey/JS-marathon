import {player1, player2} from "./main.js"

const $logs = document.querySelector('.logFight');

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function logFight(count){
    const {name: nameCharacter, } = player1;
    const {name: nameEnemy, } = player2;
    // const {name: nameCharacter, } = player1;

    const log = this === player2 ? generateLog(nameEnemy, nameCharacter, count, player2.hp.current, player2.hp.total) :
        generateLog(nameCharacter, nameEnemy, count, player1.hp.current, player1.hp.total);
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);


}

function generateLog(firstPerson, secondPerson, count, damageHp, defaultHp) {
    const logs = [
        `${firstPerson} вспомнил что-то важное, но неожиданно ${secondPerson}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} поперхнулся, и за это ${secondPerson} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} забылся, но в это время наглый ${secondPerson}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} пришел в себя, но неожиданно ${secondPerson} случайно нанес мощнейший удар. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} поперхнулся, но в это время ${secondPerson} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} удивился, а ${secondPerson} пошатнувшись влепил подлый удар. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} высморкался, но неожиданно ${secondPerson} провел дробящий удар. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} пошатнулся, и внезапно наглый ${secondPerson} беспричинно ударил в ногу противника -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} расстроился, как вдруг, неожиданно ${secondPerson} случайно влепил стопой в живот соперника. -${count}, [${damageHp}/${defaultHp}]`,
        `${firstPerson} пытался что-то сказать, но вдруг, неожиданно ${secondPerson} со скуки, разбил бровь сопернику. -${count}, [${damageHp}/${defaultHp}]`
    ];

    return logs[random(1, logs.length) - 1];
}

function countBtn(count, e) {
    const $span = e.querySelector("span");
    let countClick = count;
    $span.innerText = countClick;

    if (countClick == 1) {
        e.disabled = true;
    }
    return function () {
        countClick -= 1;
        $span.innerText = countClick;

    }

}
export {random, countBtn, generateLog, logFight};