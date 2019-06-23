import Weather from "../models/weather";
import WeatherView from "../views/weatherview";

export default class WeatherController {

    constructor() {
        this.view = new WeatherView();
    }

    update(location) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=39208b5f60bf799ba1c24571806e1fa2`).then((res) => {
            res.json().then((res) => {
                this.weather = new Weather(res.main.temp, res.weather[0].description);
                this.updateUi(location);
            }).catch((res) => {
                this.weather = new Weather(290, "Rain");
                this.updateUi(location);
            })
        }).catch((res) => {
            this.weather = new Weather(290, "Rain");
            this.updateUi(location);
        })
    }

    updateUi(location) {
        this.view.setRegionName(location);
        this.view.setTemperature(this.weather.temperature);
        this.view.setDescription(this.weather.description);
    }
}
