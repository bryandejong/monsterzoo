import CreateMonsterController from "./createmonstercontroller";
import CreateMonsterView from "../views/createmonsterview";

export default class MainController {

    constructor() {
        debugger;
        this.initCreateMonsterSection();
    }

    initCreateMonsterSection() {
        this.createMonsterView = new CreateMonsterView();
        this.createMonsterController = new CreateMonsterController(createMonsterView);
    }
    
}