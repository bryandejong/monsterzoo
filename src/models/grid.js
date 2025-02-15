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