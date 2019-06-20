import CreateMonsterController from "./createmonstercontroller";
import CreateMonsterView from "../views/createmonsterview";

export default class MainController {

    constructor() {
        this.initCreateMonsterSection();
    }

    initCreateMonsterSection() {
        this.createMonsterView = new CreateMonsterView();
        this.createMonsterController = new CreateMonsterController(this.createMonsterView);
    }
    
}