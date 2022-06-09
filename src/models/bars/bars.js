import CustomText from "../text/customText.js"

class Bar{
    constructor(name,total, actual){
        this.name = name
        this.total = total
        this.actual= actual
    }

    printBar(color){
        const StringBar = this.name+": "+
        "#".repeat(this.actual*40/this.total)+
        "-".repeat(40-this.actual*40/this.total)

        new CustomText(StringBar, color).print()
    }

}

class LifeBar extends Bar{
    constructor(initialLife){
        super("Life", initialLife, initialLife)
    }
    printLife(){
        this.printBar(this.actual<=this.total/4? "red":"green")
    }
}

export { 
    LifeBar
}