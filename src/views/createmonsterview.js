import Monster, { fur, type, arm, color } from '../models/monster.js';
import CreateMonsterController from '../controllers/createmonstercontroller.js';

export default class CreateMonsterView {



    constructor(controller) {
        this.controller = controller;
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

    initTypeChange(){
        let conftype = document.getElementById("confType");
        conftype.onchange = () =>{
            this.controller.changedView(document.getElementById("confType").value);
        }
    }
    
    generateMonster(controller) {
        document.getElementById("confSubmitButton").onclick = () => {
            let type = document.getElementById("confType").value
            this.imgContainer.innerHTML = "";
            let imgElement = document.createElement('img');
            imgElement.classList.add("img-fluid");
            imgElement.setAttribute("id", "new-monster-img");
            imgElement.setAttribute("src", controller.getUrl(type));
            imgElement.setAttribute("draggable", true);

            imgElement.ondragstart = (ev) => {
                let editedMonster = this.getMonster();
                editedMonster.image = imgElement.getAttribute("src");
                this.controller.generatedMonster = editedMonster;
            }

            let monster = this.getMonster();
            monster.image =  controller.getUrl(type);


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
            editedMonster.image = imgElement.getAttribute("src");
            this.controller.generatedMonster = editedMonster;
        }

        this.imgContainer.appendChild(imgElement);
        this.controller.generatedMonster = monster;
    }

    setType(options){
        let typeSelect = document.getElementById("confType");
        typeSelect.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            typeSelect.appendChild(optType);
        };
    }

    setArmType(options){
        let typeArmSelect = document.getElementById("confArmType");
        typeArmSelect.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            typeArmSelect.appendChild(optType);
        };
    }

    setFurType(options){
        let typeFurSelect = document.getElementById("confFurType");
        typeFurSelect.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            typeFurSelect.appendChild(optType);
        };
    }

    setArms(options){
        let armsSelect = document.getElementById("numberOfArms");
        armsSelect.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            armsSelect.appendChild(optType);
        };
    }

    setLegs(options){
        let legsSelect = document.getElementById("numberOfLegs");
        legsSelect.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            legsSelect.appendChild(optType);
        };
    }

    setEyes(options){
        let eyesSelect = document.getElementById("numberOfEyes");
        eyesSelect.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            eyesSelect.appendChild(optType);
        };
    }

    setColor(options){
        let colors = document.getElementById("colors");
        colors.innerHTML = '';

        for (let item in options) {
            let optType = document.createElement('option');
            optType.value = options[item];
            optType.innerHTML = options[item];
            colors.appendChild(optType);
        };
    }

}