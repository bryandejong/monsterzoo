import Monster, { fur, type, arm, color } from './monster.js';

function generate(){
    let name = document.getElementById("confName").value;
    let type = document.getElementById("confType").value;
    let armType = document.getElementById("confArmType").value;
    let furType = document.getElementById("confFurType").value;
    let arms = document.getElementById("confArms").value;
    let legs = document.getElementById("confLegs").value;
    let eyes = document.getElementById("confEyes").value;
    let monster = new Monster(name, type, furType, color.PURPLE, armType, arms, legs, eyes, false, false, "No image");
    monster.printAll();
};

document.getElementById("confSubmitButton").addEventListener("click", () => generate());