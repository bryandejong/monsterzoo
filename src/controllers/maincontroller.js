import CreateMonsterController from "./createmonstercontroller";
import CreateMonsterView from "../views/createmonsterview";
import GridController from "./gridcontroller";

export default class MainController {

    constructor() {
        this.initCreateMonsterSection();
        this.initGridSection();
    }

    initCreateMonsterSection() {
        this.createMonsterController = new CreateMonsterController();
    }

    initGridSection() {
        this.gridController = new GridController();
    }

}