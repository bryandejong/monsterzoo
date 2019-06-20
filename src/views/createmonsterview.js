import Monster, { fur, type, arm, color } from '../models/monster.js';
import CreateMonsterController from '../controllers/createmonstercontroller.js';

export default class CreateMonsterView {

    constructor(controller) {
        this.controller = controller;
    }

    populateSelectFields() {
        let confType = document.getElementById("confType")

        for (let item in type) {
            let optType = document.createElement('option');
            optType.value = type[item];
            optType.innerHTML = type[item];
            confType.appendChild(optType);
        };

        let confArmType = document.getElementById("confArmType")

        for (let item in arm) {
            let optArmType = document.createElement('option');
            optArmType.value = arm[item];
            optArmType.innerHTML = arm[item];
            confArmType.appendChild(optArmType);
        };

        let confFurType = document.getElementById("confFurType")

        for (let item in fur) {
            let optFurType = document.createElement('option');
            optFurType.value = fur[item];
            optFurType.innerHTML = fur[item];
            confFurType.appendChild(optFurType);
        };
    }

}