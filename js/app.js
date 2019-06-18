import Monster, { fur, type, arm, color } from './monster.js';

function generate(){
    let name = document.getElementById("confName").value;
    let name = document.getElementById("confType").value;
    let name = document.getElementById("confArmType").value;
    let name = document.getElementById("confFurType").value;
    let name = document.getElementById("confArm").value;
    let name = document.getElementById("confLegs").value;
    let monster = new Monster(name, type.AIR, 5, 5, 5, true, true, fur.SLIME, color.PURPLE, "test");
    monster.printAll();
};

document.getElementById("confSubmitButton").addEventListener("click", () => generate());