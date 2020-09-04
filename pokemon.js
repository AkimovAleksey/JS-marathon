class Selectors {
    constructor(name) {
        this.elHp = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}
class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, attacks = [] }) {
        // noinspection JSAnnotator
        super(selectors);

        this.name = name;
        this.hp = {
            total: hp,
            current: hp,

        };
        this.type = type;
        this.attacks = attacks;

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
        let oneProtsent = this.hp.total / 100;
        let widthProgressbar = this.hp.current / oneProtsent;
        this.elProgressbar.style.width = widthProgressbar + '%';
    }

    changeHp = (e, count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;

            const $p = document.createElement('p');
            $p.innerText = ('Бедный '+this.name + ' проиграл бой!');
            const $logs = document.querySelector('.logFight');
            $logs.insertBefore($p, $logs.children[0]);
            e.disabled = true;
            this.renderHp();

            return;
        }

        this.renderHp();
        cb && cb(count);
    }

    attackBot = (count, cb) => {
            this.hp.current -= count;

            if (this.hp.current <= 0) {
                this.hp.current = 0;

                const $p = document.createElement('p');
                $p.innerText = ('Бедный '+this.name + ' проиграл бой!');
                const $logs = document.querySelector('.logFight');
                $logs.insertBefore($p, $logs.children[0]);
                e.disabled = true;
                this.renderHp();

                return;
            }

            this.renderHp();
            cb && cb(count);

    };

}

export default Pokemon;