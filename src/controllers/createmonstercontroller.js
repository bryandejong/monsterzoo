import CreateMonsterView from '../views/createmonsterview.js';
import Monster, { fur, type, arm, color } from '../models/monster.js';
import Type from '../models/type.js';

export default class CreateMonsterController {

    constructor() {
        this.view = new CreateMonsterView(this);
        this.initView();
        this.view.initTypeChange(this);
        this.view.generateMonster(this);

    }

    initView(){
        let typeOptions = new Array(type.WATER, type.FIRE, type.EARTH, type.AIR); 
        
        this.initTypes();
        this.view.setType(typeOptions);
        this.view.setArmType(this.waterType.armType);
        this.view.setFurType(this.waterType.furType);
        this.view.setArms(this.waterType.arms);
        this.view.setLegs(this.waterType.legs);
        this.view.setEyes(this.waterType.eyes);
        this.view.setColor(this.waterType.colors);

    }

    changedView(elementType){

        if(elementType == "Water"){
            this.view.setArmType(this.waterType.armType);
            this.view.setFurType(this.waterType.furType);
            this.view.setArms(this.waterType.arms);
            this.view.setLegs(this.waterType.legs);
            this.view.setEyes(this.waterType.eyes);
            this.view.setColor(this.waterType.colors);
        }else if(elementType == "Fire"){
            this.view.setArmType(this.fireType.armType);
            this.view.setFurType(this.fireType.furType);
            this.view.setArms(this.fireType.arms);
            this.view.setLegs(this.fireType.legs);
            this.view.setEyes(this.fireType.eyes);
            this.view.setColor(this.fireType.colors);
        }else if(elementType == "Earth"){
            this.view.setArmType(this.earthType.armType);
            this.view.setFurType(this.earthType.furType);
            this.view.setArms(this.earthType.arms);
            this.view.setLegs(this.earthType.legs);
            this.view.setEyes(this.earthType.eyes);
            this.view.setColor(this.earthType.colors);
        }else if (elementType == "Air"){
            this.view.setArmType(this.windType.armType);
            this.view.setFurType(this.windType.furType);
            this.view.setArms(this.windType.arms);
            this.view.setLegs(this.windType.legs);
            this.view.setEyes(this.windType.eyes);
            this.view.setColor(this.windType.colors);
        }
    }

    initTypes(){
        let waterArmType = new Array(arm.TENTACLES, arm.FINS);
        let waterFurType = new Array(fur.SCALES, fur.SLIME);
        let waterArms = new Array(0,1,2,3,4,5,6,7,8);
        let waterLegs = new Array(0,1,2,3,4);
        let waterEyes = new Array(0,1,2,3,4,5,6,7,8);
        let waterColor = new Array(color.BLUE, color.RED, color.GREEN);
        let waterUrl = "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png";

        this.waterType = new Type(waterArmType, waterFurType, waterArms, waterLegs, waterEyes, waterColor, waterUrl);

        let fireArmType = new Array(arm.TENTACLES, arm.CLAWS, arm.CLAWWINGS);
        let fireFurType = new Array(fur.SCALES, fur.FEATHERS);
        let fireArms = new Array(0,1,2,3,4,5,6);
        let fireLegs = new Array([2]);
        let fireEyes = new Array(0,1,2,3,4);
        let fireColor = new Array(color.RED, color.ORANGE, color.BROWN);
        let fireUrl = "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png";
        
        this.fireType = new Type(fireArmType, fireFurType, fireArms, fireLegs, fireEyes, fireColor, fireUrl);

        let earthArmType = new Array(arm.CLAWS);
        let earthFurType = new Array(fur.HAIR, fur.SCALES, fur.SLIME);
        let earthArms = new Array([2]);
        let earthLegs = new Array(2,4,6);
        let earthEyes = new Array([2]);
        let earthColor = new Array(color.PURPLE, color.ORANGE, color.WHITE);
        let earthUrl = "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png";

        this.earthType = new Type(earthArmType, earthFurType, earthArms, earthLegs, earthEyes, earthColor, earthUrl);

        let windArmType = new Array(arm.WINGS, arm.CLAWWINGS);
        let windFurType = new Array(fur.FEATHERS, fur.HAIR, fur.SCALES);
        let windArms = new Array([2]);
        let windLegs = new Array(0,2);
        let windEyes = new Array([2]);
        let windColor = new Array(color.WHITE, color.BLUE, color.PURPLE);
        let windUrl = "https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png";

        this.windType = new Type(windArmType, windFurType, windArms, windLegs, windEyes, windColor, windUrl);
    }


    editMonster(index) {
        let monster = this.gridController.getMonster(index);
        this.view.setMonster(monster);
        this.gridController.removeMonster(index);
    }

    getMonster() {
        return this.generatedMonster;
    }

    getUrl(type){
        if(type == "Water"){
            return this.waterType.url
        }else if(type == "Fire"){
            return this.fireType.url
        }else if(type == "Earth"){
            return this.earthType.url
        }else if (type == "Air"){
            return this.windType.url
        }
    }

}
