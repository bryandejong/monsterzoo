import Monster, { fur, type, arm, color } from '../models/monster.js';
import CreateMonsterController from '../controllers/createmonstercontroller.js';

export default class CreateMonsterView {


    constructor(controller) {
        this.controller = controller;
        this.firstPopulate();
        this.initImageContainer();
    }

    initImageContainer() {
        this.imgContainer = document.getElementById("monster-img-container");

        this.imgContainer.ondrop = (ev) => {
            let originIndex = ev.dataTransfer.getData("originIndex");
            this.controller.editMonster(originIndex);
        }

        this.imgContainer.ondragover = (ev) => {
            ev.preventDefault();
        }
    }

    populateSelectFields() {
        var self = this;

        let confArray = new Array("confArmType", "confFurType", "confType", "numberOfArms", "numberOfLegs", "numberOfEyes", "colors");

        confArray.forEach(function (conf) {
            let el = document.getElementById(conf)
            el.addEventListener("change", function () {

                let elementArray = self.controller.checkSelectField(document.getElementById("confType").value, document.getElementById("confArmType").value, document.getElementById("confFurType").value, document.getElementById("numberOfArms").value, document.getElementById("numberOfLegs").value, document.getElementById("numberOfEyes").value, document.getElementById("colors").value);
                self.removePopulatedFields(confArray);
                self.rePopulateField(elementArray)
            });
        })
    }

    rePopulateField(array) {

        for (let item in array[1]) {
            let optType = document.createElement('option');
            optType.value = array[1][item];
            optType.innerHTML = array[1][item];
            confArmType.appendChild(optType);
        };
        for (let item in array[4]) {
            let optType = document.createElement('option');
            optType.value = array[4][item];
            optType.innerHTML = array[4][item];
            confFurType.appendChild(optType);

        };

        for (let item in array[0]) {
            let optType = document.createElement('option');
            optType.value = array[0][item];
            optType.innerHTML = array[0][item];
            numberOfArms.appendChild(optType);
        };

        for (let item in array[2]) {
            let optType = document.createElement('option');
            optType.value = array[2][item];
            optType.innerHTML = array[2][item];
            numberOfLegs.appendChild(optType);
        };

        for (let item in array[3]) {
            let optType = document.createElement('option');
            optType.value = array[3][item];
            optType.innerHTML = array[3][item];
            numberOfEyes.appendChild(optType);
        };
        for (let item in array[7]) {
            let optType = document.createElement('option');
            optType.value = array[7][item];
            optType.innerHTML = array[7][item];
            colors.appendChild(optType);
        };
    }

    firstPopulate() {

        let firstPopulateArray = new Array(["Water", "Fire", "Air", "Earth"], ["Tentacles", "Fins"], ["Scales", "Slime"], [0, 1, 2, 3, 4, 5, 6, 7, 8], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4, 5, 6, 7, 8], [color.BLUE, color.RED, color.GREEN])


        for (let item in firstPopulateArray[0]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[0][item];
            optType.innerHTML = firstPopulateArray[0][item];
            confType.appendChild(optType);
        };

        for (let item in firstPopulateArray[1]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[1][item];
            optType.innerHTML = firstPopulateArray[1][item];
            confArmType.appendChild(optType);
        };

        for (let item in firstPopulateArray[2]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[2][item];
            optType.innerHTML = firstPopulateArray[2][item];
            confFurType.appendChild(optType);
        };

        for (let item in firstPopulateArray[3]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[3][item];
            optType.innerHTML = firstPopulateArray[3][item];
            numberOfArms.appendChild(optType);
        };

        for (let item in firstPopulateArray[4]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[4][item];
            optType.innerHTML = firstPopulateArray[4][item];
            numberOfLegs.appendChild(optType);
        };

        for (let item in firstPopulateArray[5]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[5][item];
            optType.innerHTML = firstPopulateArray[5][item];
            numberOfEyes.appendChild(optType);
        };

        for (let item in firstPopulateArray[6]) {
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[6][item];
            optType.innerHTML = firstPopulateArray[6][item];
            colors.appendChild(optType);
        };

    }

    removePopulatedFields(array) {
        array.forEach(function (item) {
            if (item !== "confType") {
                var conf = document.getElementById(item);
                conf.innerHTML = '';
            }
        });
    }


    generateMonser(controller) {
        document.getElementById("confSubmitButton").onclick = () => {
            this.imgContainer.innerHTML = "";
            this.monsterImgArray = controller.checkSelectField(document.getElementById("confType").value, document.getElementById("confFurType").value);
            let imgElement = document.createElement('img');
            imgElement.classList.add("img-fluid");
            imgElement.setAttribute("id", "new-monster-img");
            imgElement.setAttribute("src", this.monsterImgArray[8][0]);
            imgElement.setAttribute("draggable", true);

            let monster = this.getMonster();
            monster.image = this.monsterImgArray[8][0];

            this.imgContainer.appendChild(imgElement);
            this.controller.generatedMonster = monster;
        };
    }

    getMonster() {
        let name = document.getElementById("confName").value;
        let type = document.getElementById("confType").value;
        let armType = document.getElementById("confArmType").value;
        let furType = document.getElementById("confFurType").value;
        let arms = document.getElementById("numberOfArms").value;
        let legs = document.getElementById("numberOfLegs").value;
        let eyes = document.getElementById("numberOfEyes").value;
        let color = document.getElementById("colors").value;
        let monster = new Monster(name, type, furType, color, armType, arms, legs, eyes, false, false);
        return monster;
    }
    
    setMonster(monster) {
        this.populateSelectFields();
        document.getElementById("confName").value = monster.name;
        document.getElementById("confType").value = monster.type;
        document.getElementById("confArmType").value = monster.arm;
        document.getElementById("confFurType").value = monster.fur;
        document.getElementById("numberOfArms").value = monster.amountOfArms;
        document.getElementById("numberOfLegs").value = monster.amountOfLegs;
        document.getElementById("numberOfEyes").value = monster.amountOfEyes;
        document.getElementById("colors").value = monster.color;

        this.imgContainer.innerHTML = "";
        this.monsterImgArray = this.controller.checkSelectField(document.getElementById("confType").value, document.getElementById("confFurType").value);
        let imgElement = document.createElement('img');
        imgElement.classList.add("img-fluid");
        imgElement.setAttribute("id", "new-monster-img");
        imgElement.setAttribute("src", monster.image);
        imgElement.setAttribute("draggable", true);
        imgElement.ondragstart = (ev) => {
            let editedMonster = this.getMonster();
            console.log(editedMonster);
            editedMonster.image = imgElement.getAttribute("src");
            this.controller.generatedMonster = editedMonster;
        }

        this.imgContainer.appendChild(imgElement);
        this.controller.generatedMonster = monster;
    }


}