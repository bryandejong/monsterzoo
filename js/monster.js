class Monster {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    printName(){ 
        console.log(this.name);
    }
}