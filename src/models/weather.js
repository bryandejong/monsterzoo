export default class Weather {
    constructor(temperature, description) {
        this.temperature = Math.floor(temperature - 272);
        this.description = description;
    }
}