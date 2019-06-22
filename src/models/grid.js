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

        let monsterA = new Monster("Pikachu", type.FIRE, fur.FEATHERS, color.WHITE, arm.WINGS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png");
        let monsterB = new Monster("Pikachu", type.FIRE, fur.FEATHERS, color.WHITE, arm.WINGS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png");
        let monsterC = new Monster("Pikachu", type.FIRE, fur.FEATHERS, color.WHITE, arm.WINGS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png");
        let monsterD = new Monster("Pikachu", type.FIRE, fur.FEATHERS, color.WHITE, arm.WINGS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png");
        this.getCell(1, 0).monster = monsterA;
        this.getCell(2, 0).monster = monsterB;
        this.getCell(8, 9).monster = monsterC;
        this.getCell(4, 5).monster = monsterD;

    }

    getCell(x, y) {
        let index = (y * this.height) + x;
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

        this.gridArray[target].monster = monster;
        this.gridArray[origin].monster = null;
    }
}