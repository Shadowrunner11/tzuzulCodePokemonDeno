import charmanderAsciiArt from "./assets/asciiSprites/charmander.js";
import pikachuAsciArt from "./assets/asciiSprites/pikachu.js";
import { LifeBar } from "./models/bars/bars.js";
import { Pokemon } from "./models/pokemons/pokemon.js";

const PikachuLifeBar  = new LifeBar(100)

const Pikachu = new Pokemon(
    "Pollito Amarillo",
    {atk:50, def:40, atkS:60, defS:20, speed:2},
    PikachuLifeBar,
    pikachuAsciArt,
    "yellow"
    )

Pikachu.showPokemon()

PikachuLifeBar.actual = 20

Pikachu.showPokemon()


const CharmanderLifeBar  = new LifeBar(100)

const Charmander = new Pokemon(
    "Chorizito",
    {atk:150, def:140, atkS:160, defS:120, speed:12},
    CharmanderLifeBar,
    charmanderAsciiArt,
    "orange"
    )

Charmander.showPokemon()

CharmanderLifeBar.actual = 20

Charmander.showPokemon()