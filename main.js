import Pokemon from "./pokemon.js";


const player1 = new Pokemon({
    name: 'Picachu',
    type: 'electric',
    hp: 500,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 480,
    selectors: 'enemy',
});


const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick2');
const $btn3 = document.getElementById('btn-kick3');
const $logs = document.querySelector('.logFight');


$btn.addEventListener("click", function () {
    const count = countBtn($btn);
    count();
    player1.changeHp(random(20), function (count) {
        logFight(count);
    });
    player2.changeHp(random(20), function (count) {
        logFight(count);
    });
})

$btn2.addEventListener("click", function () {
    const count = countBtn($btn2);
    count();
    player1.changeHp(random(30) + 10, function (count) {
        logFight(count);
    });
    player2.changeHp(random(30) + 10, function (count) {
        logFight(count);
    });
})

$btn3.addEventListener("click", function () {
    const count = countBtn($btn3);
    count();
    player1.changeHp(random(20) + 5, function (count) {
        logFight(count);
    });
    player2.changeHp(random(20) + 5, function (count) {
        logFight(count);
    });
})


function random(num) {
    return Math.ceil(Math.random() * num);
}

function logFight(count){
    const {name: nameEnemy, total: defaultHpEnemy, current: damageHpEnemy} = player2;
    const {name: nameCharacter, total: defaultHpCharacter, current: damageHpCharacter} = player1;

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

    return logs[random(logs.length) - 1];
}

function countBtn(e) {
    let countClick = +e.querySelector("span").innerHTML;
    const $span = e.querySelector("span");
    if (countClick == 1) {
        e.disabled = true;
    }
    return function () {
        countClick -= 1;
        $span.innerText = countClick;

    }

}
