class Selectors {
    constructor(name) {
        this.elHp = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}
class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors}) {
        // noinspection JSAnnotator
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;

        this.renderHp();
    }
    renderHp = () => {
        this.renderHpLife();
        this.renderProgressbarHp();
    }

    renderHpLife = () => {
        const{ elHp, hp: {current, total } } = this;
        elHp.innerText = current + '/'+ total;
    }

    renderProgressbarHp = () => {
        let oneProtsent = this.total / 100;
        let widthProgressbar = this.current / oneProtsent;
        this.elProgressbar.style.width = widthProgressbar + '%';
    }

    changeHp = (count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;

            const $p = document.createElement('p');
            $p.innerText = ('Бедный '+this.name + ' проиграл бой!');
            $logs.insertBefore($p, $logs.children[0]);
            $btn.disabled = true;
            $btn2.disabled = true;
            $btn3.disabled = true;
            this.renderHp();
            return breack;
        }

        this.renderHp();
        cb(count);
    }


}

export default Pokemon;