import CreateMonsterController from "./createmonstercontroller";
import CreateMonsterView from "../views/createmonsterview";

export default class MainController {

    constructor() {
        this.initCreateMonsterSection();
    }

    initCreateMonsterSection() {
        this.createMonsterController = new CreateMonsterController();
    }

}