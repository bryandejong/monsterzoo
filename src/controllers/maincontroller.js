import CreateMonsterController from "./createmonstercontroller";
import CreateMonsterView from "../views/createmonsterview";
import GridController from "./gridcontroller";

export default class MainController {

    constructor() {
        this.initCreateMonsterSection();
        this.initGridSection();
        this.createMonsterController.gridController = this.gridController
    }

    initCreateMonsterSection() {
        this.createMonsterController = new CreateMonsterController();
    }

    initGridSection() {
        this.gridController = new GridController(this.createMonsterController);
    }

}