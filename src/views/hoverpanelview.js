export default class HoverPanelView {

    constructor(controller) {
        this.controller = controller;
        this.panel = document.getElementById("info-panel");
        this.name = document.getElementById("info-panel-name");
        this.type = document.getElementById("info-panel-type");
        this.armType = document.getElementById("info-panel-armtype");
        this.furType = document.getElementById("info-panel-furtype");
        this.armCount = document.getElementById("info-panel-armcount");
        this.legCount = document.getElementById("info-panel-legcount");
        this.eyeCount = document.getElementById("info-panel-eyecount");
    }

    show(monster, element) {
        console.log(monster);
        this.name.innerHTML = monster.name;
        this.type.innerHTML = monster.type;
        this.armType.innerHTML = monster.arm;
        this.furType.innerHTML = monster.fur;
        this.armCount.innerHTML = monster.amountOfArms;
        this.legCount.innerHTML = monster.amountOfLegs;
        this.eyeCount.innerHTML = monster.amountOfEyes;
        this.panel.classList.remove("d-none");
        element.appendChild(this.panel);
    }

    hide() {
        this.panel.classList.add("d-none");
    }

}