const $btn = document.getElementById('btn-kick');
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
}

$btn.addEventListener('click', function(){
    character.changeHp(random(20));
    enemy.changeHp(random(20));
});

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

    if (this.damageHp <= 0) {
        this.damageHp = 0;
        alert('Бедный '+this.name + ' проиграл бой!');
        $btn.disabled = true;
    }

    this.renderHp();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}