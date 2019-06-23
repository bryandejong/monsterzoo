import CreateMonsterView from '../views/createmonsterview.js';
import Monster, { fur, type, arm, color } from '../models/monster.js';

export default class CreateMonsterController {

    constructor() {
        this.view = new CreateMonsterView(this);
        this.view.populateSelectFields();
        this.view.generateMonser(this);
    }

    generate() {
        let name = document.getElementById("confName").value;
        let type = document.getElementById("confType").value;
        let armType = document.getElementById("confArmType").value;
        let furType = document.getElementById("confFurType").value;
        let arms = document.getElementById("confArms").value;
        let legs = document.getElementById("confLegs").value;
        let eyes = document.getElementById("confEyes").value;

        let monster = new Monster(name, type, furType, color.PURPLE, armType, arms, legs, eyes, false, false, "No image");
        monster.printAll();
    }

   checkSelectField(type,arms, furs, numberArms, numberLegs, numberEyes, colors) {
        if(type == "Water"){

            var waterArray = new Array([numberArms,0,1,2,3,4,5,6,7,8],[arms, arm.TENTACLES, arm.FINS],[numberLegs,0,1,2,3,4], [numberEyes,0,1,2,3,4,5,6,7,8], [furs, fur.SCALES, fur.SLIME], false, true, [colors,color.BLUE, color.RED, color.GREEN], ["https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"]);
            return waterArray;
        }
        if (type == "Fire") {

            if(furs == undefined || furs !== "Feathers"){
                var fireArray = new Array([numberArms,0,1,2,3,4,5,6],[arms, arm.TENTACLES, arm.FINS, arm.CLAWWINGS], [numberLegs,0,1,2], [numberEyes,0,1,2,3,4], [furs, fur.SCALES, fur.FEATHERS], false, false, [colors,color.RED, color.ORANGE, color.BROWN], ["https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"]);
            }else{
                var fireArray = new Array([numberArms,0,1,2,3,4,5,6],[arms, arm.TENTACLES, arm.FINS, arm.CLAWWINGS], [numberLegs,0.1,2], [numberEyes,0,1,2,3,4], [furs, fur.SCALES, fur.FEATHERS], false, true, [colors,color.RED, color.ORANGE, color.BROWN], ["https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"]);
            }
            return fireArray;
        }
        if (type == "Earth") {

            var earthArray = new Array([2],[arm.CLAWS], [numberLegs,2, 4, 6], [2], [furs, fur.HAIR, fur.SCALES, fur.SLIME], false, false, [colors,color.PURPLE, color.ORANGE, color.WHITE], ["https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"]);

            return earthArray;

        }
        if (type == "Air") {

            if(furs == undefined || furs !=="Scales"){
                var airArray = new Array([2],[arms, arm.WINGS, arm.CLAWWINGS], [numberLegs,0,2], [2],[furs, fur.FEATHERS, fur.HAIR, fur.SCALES], true, false, [colors,color.WHITE, color.BLUE, color.PURPLE], ["https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png"]);
            }else{
                 var airArray = new Array([2],[arms, arm.WINGS, arm.CLAWWINGS], [numberLegs,0,2], [2], [furs, fur.FEATHERS, fur.HAIR, fur.SCALES], true, true, [colors,color.WHITE, color.BLUE, color.PURPLE], ["https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png"]);
            }
            return airArray;
        } 
    }

    getMonster() {
        return this.generatedMonster;
    }

    editMonster(index) {
        let monster = this.gridController.getMonster(index);
        this.view.setMonster(monster);
        this.gridController.removeMonster(index);
    }
}