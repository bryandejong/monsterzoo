import Monster, { fur, type, arm, color } from './models/monster.js';

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

function enums(){
    
    let confType = document.getElementById("confType")
  
    for(let item in type){
        let optType = document.createElement('option');
        optType.value= type[item];
        optType.innerHTML = type[item];
        confType.appendChild(optType);
    };
    
    let confArmType = document.getElementById("confArmType")
  
    for(let item in arm){
        let optArmType = document.createElement('option');
        optArmType.value= arm[item];
        optArmType.innerHTML = arm[item];
        confArmType.appendChild(optArmType);
    };
    
    let confFurType = document.getElementById("confFurType")
  
    for(let item in fur){
        let optFurType = document.createElement('option');
        optFurType.value= fur[item];
        optFurType.innerHTML = fur[item];
        confFurType.appendChild(optFurType);
    };
}


document.body.addEventListener("load", enums, true)
document.getElementById("confSubmitButton").addEventListener("click", () => generate());
