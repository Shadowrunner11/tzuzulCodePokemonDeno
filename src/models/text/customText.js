class CustomText extends String{
    constructor(stringValue, color){
        super(stringValue)
        this.color = color
    }
    print(){
        console.log(`%c${this.toString()}`,`color: ${this.color};`)
    }
}

export default CustomText