class Selectors {
    constructor(name) {
        this.elHp = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
        this.elName = document.getElementById(`name-${name}`);
    }
}
class Pokemon extends Selectors {
    constructor({ id, name, hp, type, selectors, img, attacks = [] }) {
        // noinspection JSAnnotator
        super(selectors);

        this.id = id;
        this.name = name;
        this.hp = {
            total: hp,
            current: hp,

        };
        this.img = img;
        this.type = type;
        this.attacks = attacks;

        this.renderHp();
        this.paddingPokemon()
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

    paddingPokemon = () => {
        const {elImg, elName} = this;
        elImg.src = this.img;
        elName.innerText = this.name;
    }

}

export default Pokemon;