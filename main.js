const $btn = document.getElementById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHp: 200,
    damageHp: 200,
    elHp: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHp: changeHp,
}

const enemy = {
    name: 'Charmander',
    defaultHp: 200,
    damageHp: 200,
    elHp: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHp: changeHp,
}

$btn.addEventListener('click', function(){
    character.changeHp(random(20));
    enemy.changeHp(random(20));
});

function renderHp(persone) {
    renderHpLife(persone);
    renderProgressbarHp(persone);
}

function renderHpLife(persone) {
    persone.elHp.innerText = persone.damageHp + '/'+ persone.defaultHp;
}

function renderProgressbarHp(persone) {
    let oneProcent = persone.defaultHp / 100;
    let widthProgressbar = persone.damageHp / oneProcent;
    persone.elProgressbar.style.width = widthProgressbar + '%';
}

function changeHp(count) {
    if (this.damageHp < count) {
        this.damageHp = 0;
        alert('Бедный '+this.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        this.damageHp -= count;

    }
    renderHp(this);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}