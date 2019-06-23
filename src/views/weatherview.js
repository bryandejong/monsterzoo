export default class WeatherView {

    constructor(){
        this.regionElement = document.getElementById("region-name");
        this.temperatureElement = document.getElementById("region-temperature");
        this.descElement = document.getElementById("region-desc");
    }

    setRegionName(value){
        this.regionElement.innerHTML = value;
    }

    setTemperature(value) {
        this.temperatureElement.innerHTML = value;
    }

    setDescription(value) {
        this.descElement.innerHTML = value;
    }
}