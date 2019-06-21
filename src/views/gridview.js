export default class GridView {

    constructor() {
    }

    drawGrid(grid, region) {
        let w = grid.length;
        let h = grid[0].Columns.length;
        this.gridContainer = document.getElementById("grid-container");
        this.table = document.createElement("table");
        this.table.setAttribute("id", "grid");

        for (let y = 0; y < w; y++) {
            this.tr = document.createElement("tr");
            for (let x = 0; x < h; x++) {
                this.td = document.createElement("td");
                this.td.classList.add(region.bgClass);
                this.tr.appendChild(this.td);
                if(grid[y].Columns[x] == 1) {
                    let img = document.createElement("img")
                    img.setAttribute("src", region.obstacleImgUrl);
                    img.classList.add("img-fluid");
                    this.td.appendChild(img);
                }
            }
            this.table.appendChild(this.tr);
        }
        
        this.gridContainer.appendChild(this.table);

        for (let i = 0; i < this.table.rows.length; i++) {
            for (let j = 0; j < this.table.rows[i].cells.length; j++) {
                this.table.rows[i].cells[j].onclick = function (i, j) {
                    console.log(i + ":" + j);
                }.bind(null, i, j);
            }
        }
    }

    
}