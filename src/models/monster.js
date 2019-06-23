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

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get fur() {
        return this._fur;
    }

    set fur(value) {
        this._fur = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get arm() {
        return this._arm
    }

    set arm(value) {
        this._arm = value;
    }

    get amountOfArms() {
        return this._amountOfArms;
    }

    set amountOfArms(value) {
        this._amountOfArms = value;
    }

    get amountOfLegs() {
        return this._amountOfLegs;
    }

    set amountOfLegs(value) {
        this._amountOfLegs = value;
    }

    get amountOfEyes() {
        return this._amountOfEyes;
    }

    set amountOfEyes(value) {
        this._amountOfEyes = value;
    }

    get canFly() {
        return this._canFly;
    }

    set canFly(value) {
        this._canFly = value;
    }

    get canSwim() {
        return this._canSwim;
    }

    set canSwim(value) {
        this._canSwim = value;
    }
}

export const type = {
    WATER: 'Water',
    FIRE: 'Fire',
    AIR: 'Air',
    EARTH: 'Earth',
}

export const arm = {
    TENTACLES: 'Tentacles',
    FINS: 'Fins',
    CLAWS: 'Claws',
    CLAWWINGS: 'Claws-wings',
    WINGS: 'Wings',
}

export const fur = {
    SCALES: 'Scales',
    SLIME: 'Slime',
    FEATHERS: 'Feathers',
    HAIR: 'Hair',
}

export const color = {
    BLUE: 'Blue',
    RED: 'Red',
    GREEN: 'Green',
    ORANGE: 'Orange',
    BROWN: 'Brown',
    PURPLE: 'Purple',
    WHITE: 'White',
}