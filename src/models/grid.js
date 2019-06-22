import Cell from "./cell.js";

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
    }

    getCell(x, y) {
        let index = (y * this.height) + x;
        return this.gridArray[index];
    }

}