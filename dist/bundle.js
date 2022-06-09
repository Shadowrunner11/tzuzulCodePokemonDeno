// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const charmanderAsciiArt = `
⠀⠀⠀⠀⠀⠀⡀⠠⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡔⠁⠀⠀⠀⠈⠑⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣜⠃⠀⠀⠀⢘⢳⢆⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⠔⠉⠀⠀⠀⠀⣜⠀⢸⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⠀⡀⠀⠀⠀⠀⠈⠉⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀
⠀⡤⢄⣳⣦⠤⠤⠤⠄⣄⡲⡪⠀⡇⠀⢀⡀⢤⠀⠀⠀⢠⠒⢋⠤⠀
⠘⢝⠁⠈⠙⠷⠒⠒⠾⠓⢎⠀⠀⠁⠉⠁⠈⢛⠆⠀⠀⠈⢷⣿⠀⣆
⠀⠀⠑⢄⠀⡘⠀⠀⠀⠀⠀⠣⡀⠀⠀⣀⠔⠁⠀⠀⠀⢀⠃⠹⢷⡄
⠀⠀⠀⠀⠑⡇⠀⠀⠀⠀⠀⠀⢡⠀⠈⡄⠀⠀⠀⠀⠀⠈⠣⢤⡼⠀
⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡆⠀⠰⠀⠀⠀⠀⠀⠀⠀⡌⡇⠀
⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⡇⠀⠀⠀⠀⢀⠌⢠⠃⠀
⠀⠀⠀⠀⡐⠉⠣⡀⠀⠀⠀⠀⢀⠃⠂⠐⡎⠁⠒⠂⠈⠀⣠⠏⠀⠀
⠀⠀⠀⠀⡀⠀⠀⠈⠒⡤⠀⠠⠊⠀⠀⠀⡠⣀⣀⠠⢄⠾⠃⠀⠀⠀
⠀⠀⣀⡤⠚⠲⠀⠀⠸⡁⠀⢘⠄⠀⠀⣠⠋⠁⠀⠉⠁⠀⠀⠀⠀⠀
⠀⠈⠛⡊⠂⠀⠀⠒⠂⠁⠀⠘⢖⣔⣶⡲⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;
const pikachuAsciArt = `
⣷⣦⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⠀⠀⠀
⠀⠙⣿⡄⠈⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠔⠊⠉⣿⡿⠁⠀⠀⠀
⠀⠀⠈⠣⡀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⣰⠟⠀⠀⠀⣀⣀
⠀⠀⠀⠀⠈⠢⣄⠀⡈⠒⠊⠉⠁⠀⠈⠉⠑⠚⠀⠀⣀⠔⢊⣠⠤⠒⠊⠉⠀⡜
⠀⠀⠀⠀⠀⠀⠀⡽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠩⡔⠊⠁⠀⠀⠀⠀⠀⠀⠇
⠀⠀⠀⠀⠀⠀⠀⡇⢠⡤⢄⠀⠀⠀⠀⠀⡠⢤⣄⠀⡇⠀⠀⠀⠀⠀⠀⠀⢰⠀
⠀⠀⠀⠀⠀⠀⢀⠇⠹⠿⠟⠀⠀⠤⠀⠀⠻⠿⠟⠀⣇⠀⠀⡀⠠⠄⠒⠊⠁⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⡆⠀⠰⠤⠖⠦⠴⠀⢀⣶⣿⣿⠀⠙⢄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣿⠃⠀⠀⠀⠀⠀⠀⠀⠈⠿⡿⠛⢄⠀⠀⠱⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⠈⠓⠦⠀⣀⣀⣀⠀⡠⠴⠊⠹⡞⣁⠤⠒⠉⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⠃⠀⠀⠀⠀⡌⠉⠉⡤⠀⠀⠀⠀⢻⠿⠆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠰⠁⡀⠀⠀⠀⠀⢸⠀⢰⠃⠀⠀⠀⢠⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢶⣗⠧⡀⢳⠀⠀⠀⠀⢸⣀⣸⠀⠀⠀⢀⡜⠀⣸⢤⣶⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠻⣿⣦⣈⣧⡀⠀⠀⢸⣿⣿⠀⠀⢀⣼⡀⣨⣿⡿⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⠿⠿⠓⠄⠤⠘⠉⠙⠤⢀⠾⠿⣿⠟⠋
`;
class CustomText extends String {
    constructor(stringValue, color){
        super(stringValue);
        this.color = color;
    }
    print() {
        console.log(`%c${this.toString()}`, `color: ${this.color};`);
    }
}
class Bar {
    constructor(name, total, actual){
        this.name = name;
        this.total = total;
        this.actual = actual;
    }
    printBar(color) {
        const StringBar = this.name + ": " + "#".repeat(this.actual * 40 / this.total) + "-".repeat(40 - this.actual * 40 / this.total);
        new CustomText(StringBar, color).print();
    }
}
class LifeBar extends Bar {
    constructor(initialLife){
        super("Life", initialLife, initialLife);
    }
    printLife() {
        this.printBar(this.actual <= this.total / 4 ? "red" : "green");
    }
}
class Pokemon {
    constructor(name, stats, lifeBar, sprite, color){
        this.name = name;
        this.stats = stats;
        this.LifeBar = lifeBar;
        this.sprite = sprite;
        this.color = color;
    }
    showPokemon() {
        new CustomText(this.name, "peru").print();
        new CustomText(this.sprite, this.color).print();
        console.table(this.stats);
        this.LifeBar.printLife();
    }
}
const PikachuLifeBar = new LifeBar(100);
const Pikachu = new Pokemon("Pollito Amarillo", {
    atk: 50,
    def: 40,
    atkS: 60,
    defS: 20,
    speed: 2
}, PikachuLifeBar, pikachuAsciArt, "yellow");
Pikachu.showPokemon();
PikachuLifeBar.actual = 20;
Pikachu.showPokemon();
const CharmanderLifeBar = new LifeBar(100);
const Charmander = new Pokemon("Chorizito", {
    atk: 150,
    def: 140,
    atkS: 160,
    defS: 120,
    speed: 12
}, CharmanderLifeBar, charmanderAsciiArt, "orange");
Charmander.showPokemon();
CharmanderLifeBar.actual = 20;
Charmander.showPokemon();
