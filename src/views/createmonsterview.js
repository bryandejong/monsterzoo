import Monster, { fur, type, arm, color } from '../models/monster.js';
import CreateMonsterController from '../controllers/createmonstercontroller.js';

export default class CreateMonsterView {

    constructor(controller) {
        this.firstPopulate();
        this.controller = controller;
      
    }
    populateSelectFields(){

        var self = this;

        let confArray = new Array("confArmType","confFurType","confType", "numberOfArms", "numberOfLegs", "numberOfEyes");
        
        confArray.forEach(function(conf){
            let el = document.getElementById(conf)
            el.addEventListener("change", function(){
                
                let elementArray =  self.controller.checkSelectField(document.getElementById("confType").value,  document.getElementById("confFurType").value);
                self.removePopulatedFields(confArray);
                console.log("populate")
                self.removeGeneratedMonster();
                self.rePopulateField(elementArray)
            });
        })
    }

    rePopulateField(array){
        
        for(let item in array[1]){
            let optType = document.createElement('option');
            optType.value = array[1][item];
            optType.innerHTML = array[1][item];
            confArmType.appendChild(optType);
        };

        for(let item in array[4]){
            let optType = document.createElement('option');
            optType.value = array[4][item];
            optType.innerHTML = array[4][item];
            confFurType.appendChild(optType);
        };

        for(let item in array[0]){
            let optType = document.createElement('option');
            optType.value = array[0][item];
            optType.innerHTML = array[0][item];
            numberOfArms.appendChild(optType);
        };

        for(let item in array[2]){
            let optType = document.createElement('option');
            optType.value = array[2][item];
            optType.innerHTML = array[2][item];
            numberOfLegs.appendChild(optType);
        };

        for(let item in array[3]){
            let optType = document.createElement('option');
            optType.value = array[3][item];
            optType.innerHTML = array[3][item];
            numberOfEyes.appendChild(optType);
        };
    }

    firstPopulate(){

        let firstPopulateArray = new Array(["Water", "Fire", "Air", "Earth"], ["Tentacles", "Fins"], ["Scales", "Slime"],[0,1,2,3,4,5,6,7,8],[0,1,2,3,4],[0,1,2,3,4,5,6,7,8],["https://cdn.bulbagarden.net/upload/f/f5/Detective_Pikachu_artwork_2.png"])


        for(let item in firstPopulateArray[0]){
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[0][item];
            optType.innerHTML = firstPopulateArray[0][item];
            confType.appendChild(optType);
        };

        for(let item in firstPopulateArray[1]){
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[1][item];
            optType.innerHTML = firstPopulateArray[1][item];
            confArmType.appendChild(optType);
        };

        for(let item in firstPopulateArray[2]){
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[2][item];
            optType.innerHTML = firstPopulateArray[2][item];
            confFurType.appendChild(optType);
        };

        for(let item in firstPopulateArray[3]){
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[3][item];
            optType.innerHTML = firstPopulateArray[3][item];
            numberOfArms.appendChild(optType);
        };

        for(let item in firstPopulateArray[4]){
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[4][item];
            optType.innerHTML = firstPopulateArray[4][item];
            numberOfLegs.appendChild(optType);
        };

        for(let item in firstPopulateArray[5]){
            let optType = document.createElement('option');
            optType.value = firstPopulateArray[5][item];
            optType.innerHTML = firstPopulateArray[5][item];
            numberOfEyes.appendChild(optType);
        };

        
    }

    removePopulatedFields(array){
        array.forEach(function(item){
            if(item !== "confType"){
            var conf = document.getElementById(item);
            conf.innerHTML = '';
            }
        });
    }

    removeGeneratedMonster(){
        var monsterIMG = document.getElementById("monsterIMG")
        monsterIMG.innerHTML = '';
    }

    generateMonser(){

        document.getElementById("confSubmitButton").addEventListener("click", function(){
            let imgType = document.createElement('IMG')
            imgType.setAttribute("src", "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png")
            monsterIMG.appendChild(imgType);
        });
    }
}