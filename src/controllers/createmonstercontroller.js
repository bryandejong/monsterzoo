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

   checkSelectField(t, f){
       
        if(t == "Water"){

            var waterArray = new Array([0,1,2,3,4,5,6,7,8],[arm.TENTACLES, arm.FINS],[0,1,2,3,4], [0,1,2,3,4,5,6,7,8], [fur.SCALES, fur.SLIME], false, true, [color.BLUE, color.RED, color.GREEN], ["https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"]);
            console.log("waterArray: "+waterArray);
            return waterArray;
        }
        if(t == "Fire"){

            if(f == undefined || f !== "Feathers"){
                var fireArray = new Array([0,1,2,3,4,5,6],[arm.TENTACLES, arm.FINS, arm.CLAWWINGS], [0,1,2], [0,1,2,3,4], [fur.SCALES, fur.FEATHERS], false, false, [color.RED, color.ORANGE, color.BROWN], ["https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"]);
            }else{
                var fireArray = new Array([0,1,2,3,4,5,6],[arm.TENTACLES, arm.FINS, arm.CLAWWINGS], [0.1,2], [0,1,2,3,4], [fur.SCALES, fur.FEATHERS], false, true, [color.RED, color.ORANGE, color.BROWN], ["https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"]);
            }
            console.log("fireArray: "+fireArray);
            return fireArray;
        }
        if(t == "Earth"){

            var earthArray = new Array([2],[arm.CLAWS], [2, 4, 6], [2], [fur.HAIR, fur.SCALES, fur.SLIME], false, false, [color.PURPLE, color.ORANGE, color.WHITE], ["https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"]);
            console.log("earthArray: "+earthArray);

            return earthArray;

        }
        if(t == "Air"){

            if(f == undefined || f !=="Scales"){
                var airArray = new Array([2],[arm.WINGS, arm.CLAWWINGS], [0,2], [2],[fur.FEATHERS, fur.HAIR, fur.SCALES], true, false, [color.WHITE, color.BLUE, color.PURPLE], ["https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png"]);
            }else{
                 var airArray = new Array([2],[arm.WINGS, arm.CLAWWINGS], [0,2], [2], [fur.FEATHERS, fur.HAIR, fur.SCALES], true, true, [color.WHITE, color.BLUE, color.PURPLE], ["https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png"]);
            }
            console.log("airArray: "+airArray);
            return airArray;
        }else{
            console.log("extra")
        }
    }


    
}