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
                this.gridArray[index] = new Cell(cell);
                index++;
            }
        }

        let testMonster = new Monster("Pikachu", type.FIRE, fur.FEATHERS, color.WHITE, arm.WINGS, 2, 4, 4, true, false, "https://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png");
        this.getCell(1, 0).monster = testMonster;
    }

    getCell(x, y) {
        let index = (y * this.height) + x;
        return this.gridArray[index];
    }

}