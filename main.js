const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick2');
const $btn3 = document.getElementById('btn-kick3');
const $logs = document.querySelector('.logFight');
const character = {
    name: 'Pikachu',
    defaultHp: 200,
    damageHp: 200,
    elHp: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHp: changeHp,
    renderHp: renderHp,
    renderHpLife: renderHpLife,
    renderProgressbarHp: renderProgressbarHp,
    logFight: logFight,
}

const enemy = {
    name: 'Charmander',
    defaultHp: 200,
    damageHp: 200,
    elHp: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHp: changeHp,
    renderHp: renderHp,
    renderHpLife: renderHpLife,
    renderProgressbarHp: renderProgressbarHp,
    logFight: logFight,
}

// const buttons = document.querySelectorAll('button');

$btn.addEventListener("click", function () {
    const count = countBtn($btn);
    count();
    character.changeHp(random(20));
    enemy.changeHp(random(20));
})

$btn2.addEventListener("click", function () {
    const count = countBtn($btn2);
    count();
    character.changeHp(random(30) + 10);
    enemy.changeHp(random(30) + 10);
})

$btn3.addEventListener("click", function () {
    const count = countBtn($btn3);
    count();
    character.changeHp(random(20) + 5);
    enemy.changeHp(random(20) + 5);
})

function renderHp() {
    this.renderHpLife();
    this.renderProgressbarHp();
}

function renderHpLife() {
    this.elHp.innerText = this.damageHp + '/'+ this.defaultHp;
}

function renderProgressbarHp() {
    let oneProtsent = this.defaultHp / 100;
    let widthProgressbar = this.damageHp / oneProtsent;
    this.elProgressbar.style.width = widthProgressbar + '%';
}

function changeHp(count) {
    this.damageHp -= count;

    this.logFight(count);


    if (this.damageHp <= 0) {
        this.damageHp = 0;

        const $p = document.createElement('p');
        $p.innerText = ('Бедный '+this.name + ' проиграл бой!');
        $logs.insertBefore($p, $logs.children[0]);
        // alert('Бедный '+this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btn2.disabled = true;
        $btn3.disabled = true;
        this.renderHp();
        return breack;
    }

    this.renderHp();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function logFight(count){
    const {name: nameEnemy, defaultHp: defaultHpEnemy, damageHp: damageHpEnemy} = enemy;
    const {name: nameCharacter, defaultHp: defaultHpCharacter, damageHp: damageHpCharacter} = character;

    const log = this === enemy ? generateLog(nameEnemy, nameCharacter, count, damageHpEnemy, defaultHpEnemy) :
        generateLog(nameCharacter, nameEnemy, count, damageHpCharacter, defaultHpCharacter);
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
