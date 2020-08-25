const $btn = document.getElementById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHp: 100,
    damageHp: 100,
    elHp: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHp: 100,
    damageHp: 100,
    elHp: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function(){
    changeHp(random(20), character);
    changeHp(random(20), enemy);
});

function init() {
    renderHp(character);
    renderHp(enemy);
}

function renderHp(person) {
    renderHpLife(person);
    renderProgressbarHp(person);
}

function renderHpLife(person) {
    person.elHp.innerText = person.damageHp + '/'+ person.defaultHp;
}

function renderProgressbarHp(person) {
    person.elProgressbar.style.width = person.damageHp + '%';
}

function changeHp(count, person) {
    if (person.damageHp < count) {
        person.damageHp = 0;
        alert('Бедный '+person.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        person.damageHp -= count;

    }
    renderHp(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}