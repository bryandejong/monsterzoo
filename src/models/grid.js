import Cell from "./cell.js";
import Monster, { type, arm, color, fur } from "./monster.js";

export default class Grid {

    constructor(jsonGrid) {
        this.width = jsonGrid[0].Columns.length;
        this.height = jsonGrid.length;
        this.cellCount = [jsonGrid.length * jsonGrid[0].Columns.length];
        this.gridArray = [this.cellCount];

        let index = 0;
        for(let row of jsonGrid) {
            for(let cell of row.Columns) {
                this.gridArray[index] = new Cell(index, cell);
                index++;
            }
        }

        let monsterA = new Monster("Magikarp", type.WATER, fur.SCALES, color.RED, arm.FINS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png");
        let monsterB = new Monster("Charmander", type.FIRE, fur.SCALES, color.ORANGE, arm.CLAWS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png");
        let monsterC = new Monster("Squirtle", type.WATER, fur.SLIME, color.BLUE, arm.FINS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png");
        let monsterD = new Monster("Bulbasaur", type.EARTH, fur.HAIR, color.GREEN, arm.TENTACLES, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png");
        this.getCell(1, 0).monster = monsterA;
        this.getCell(2, 0).monster = monsterB;
        this.getCell(8, 9).monster = monsterC;
        this.getCell(4, 5).monster = monsterD;

    }

    getCell(x, y) {
        let index = this.getIndex(x, y);
        if(index > this.gridArray.length) {
            return null;
        } else if(x < 0 || x > this.width || y < 0 || y > this.height) {
            return null;
        }
        return this.gridArray[index];
    }

    getCellByIndex(index) {
        return this.gridArray[index];
    }

    moveMonster(origin, target) {
        let monster = this.gridArray[origin].monster;

        if(monster == undefined || monster == null) {
            console.warn("No monster in this position");
            return;
        }

        if(this.gridArray[target].monster != undefined || this.gridArray[target].monster != null) {
            return;
        }

        this.gridArray[target].monster = monster;
        this.gridArray[origin].monster = null;
    }

    removeMonster(index) {
        this.gridArray[index].monster = null;
    }

    placeMonster(index, monster) {
        this.gridArray[index].monster = monster;
    }

    getIndex(x, y) {
        let index = (y * this.height) + x;
        return index;
    }
}