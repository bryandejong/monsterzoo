import CreateMonsterController from "./createmonstercontroller";
import CreateMonsterView from "../views/createmonsterview";
import GridController from "./gridcontroller";
import WeatherController from './weathercontroller';

export default class MainController {

    constructor() {
        this.initCreateMonsterSection();
        this.initWeatherController();
        this.initGridSection();
        this.createMonsterController.gridController = this.gridController;
    }

    initCreateMonsterSection() {
        this.createMonsterController = new CreateMonsterController();
    }

    initGridSection() {
        this.gridController = new GridController(this.createMonsterController, this.weatherController);
    }

    initWeatherController(){
        this.weatherController = new WeatherController();
    }

}