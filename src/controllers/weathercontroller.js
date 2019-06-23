
export default class WeatherController{
    constructor(){

        fetch("api.openweathermap.org/data/2.5/weather?q=London").then(response => {
            response.json().then((json) => this.onFetched(json))
        });
    }
}