export default class HoverPanelView {

    constructor(monster) {
        this.name = document.getElementById("info-panel-name");
        this.type = document.getElementById("info-panel-type");
        this.armType = document.getElementById("info-panel-armtype");
        this.furType = document.getElementById("info-panel-furtype");
        this.armCount = document.getElementById("info-panel-armcount");
        this.legCount = document.getElementById("info-panel-legscount");
        this.eyeCount = document.getElementById("info-panel-eyescount");
    }

}