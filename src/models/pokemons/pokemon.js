import CustomText from "../text/customText.js"

class Pokemon{
    constructor(name, stats, lifeBar, sprite, color){
        this.name = name
        this.stats = stats
        this.LifeBar = lifeBar
        this.sprite =  sprite
        this.color = color
    }

    showPokemon(){
        new CustomText(this.name, "peru").print()
        new CustomText(this.sprite,this.color).print()
        console.table(this.stats)
        this.LifeBar.printLife()
    }
}

export { Pokemon }