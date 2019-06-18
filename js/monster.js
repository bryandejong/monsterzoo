export default class Monster {

    constructor(name, type, furType, color, armType, amountOfArms, amountOfLegs, amountOfEyes, canFly, canSwim, image) {
        this.name = name;
        this.type = type;
        this.amountOfArms = amountOfArms;
        this.amountOfLegs = amountOfLegs;
        this.amountOfEyes = amountOfEyes;
        this.canFly = canFly;
        this.canSwim = canSwim;
        this.fur = furType;
        this.color = color;
        this.image = image;
        this.arm = armType;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type(){
        return this._type;
    }

    set type(value){
        this._type = value;
    }

    get fur(){
        return this._fur;
    }

    set fur(value){
        this._fur = value;
    }

    get color(){
        return this._color;
    }

    set color(value){
        this._color = value;
    }

    get arm() {
        return this._arm
    }

    set arm(value){
        this._arm = arm;
    }

    get amountOfArms(){
        return this._amountOfArms;
    }

    set amountOfArms(value){
        this._amountOfArms = value;
    }

    get amountOfLegs(){
        return this._amountOfLegs;
    }

    set amountOfLegs(value){
        this._amountOfLegs = value;
    }

    get amountOfEyes(){
        return this._amountOfEyes;
    }

    set amountOfEyes(value){
        this._amountOfEyes = value;
    }

    get canFly(){
        return this._canFly;
    }

    set canFly(value){
        this._canFly = value;
    }

    get canSwim(){
        return this._canSwim;
    }

    set canSwim(value){
        this._canSwim = value;
    }

    printName(){ 
        console.log(this.name);
    }

    printAll(){
        console.log(this);
    }
}

export const type = {
    WATER: 'water',
    FIRE: 'fire',
    AIR: 'air',
    EARTH: 'EARTH',
}

export const arm = {
    TENTACLES: 'tentacles',
    FINS: 'fines',
    CLAWS: 'claws',
    CLAWWINGS: 'claws-wings',
    WINGS: 'wings',
}

export const fur = {
    SCALES: 'scales',
    SLIME: 'slime',
    FEATHERS: 'feathers',
    HAIR: 'hair',
}

export const color = {
    BLUE: 'blue',
    RED: 'red',
    GREEN: 'green',
    ORANGE: 'orange',
    BROWN: 'brown',
    PURPLE: 'purple',
    WHITE: 'white',
}