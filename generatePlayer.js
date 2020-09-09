import Pokemon from "./pokemon.js";

class generatePokemon {
    constructor() {
        this.server = 'https://reactmarathon-api.netlify.app/api/pokemons?random=true';
    }

    getPokemon = async () => {
        const res = await fetch(`${this.server}`);
        const body = await res.json();
        return body;
    };
}

async function generatePlayer(selectors){
    let ganerate = new generatePokemon();
        const randomPokemon = await ganerate.getPokemon();

        const player = new Pokemon({
            ...randomPokemon,
            selectors: selectors,
        });

        return player;
    }


export {generatePlayer};





