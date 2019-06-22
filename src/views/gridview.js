import GridController from "../controllers/gridcontroller";
import { Biome } from "../models/region";
import { create } from "domain";
import { isNullOrUndefined } from "util";

export default class GridView {

    constructor(controller) {
        this.controller = controller;

        document.getElementById("jungle-button").onclick = () => this.controller.switchRegion(Biome.JUNGLE);
        document.getElementById("desert-button").onclick = () => this.controller.switchRegion(Biome.DESERT);
        document.getElementById("arctic-button").onclick = () => this.controller.switchRegion(Biome.ARCTIC);

        this.gridContainer = document.getElementById("grid-container");
    }

    draw(region) {
        let grid = region.grid;

        let table = document.createElement("table");
        table.setAttribute("id", "grid");

        for (let y = 0; y < grid.width; y++) {
            let tr = document.createElement("tr");
            for (let x = 0; x < grid.height; x++) {
                let cell = this.createCell(region, grid.getCell(x, y));
                tr.appendChild(cell);
            }
            table.appendChild(tr);
        }

        this.gridContainer.innerHTML = "";
        this.gridContainer.appendChild(table);
    }

    createCell(region, cell) {
        let td = document.createElement("td");
        td.classList.add(this.getClass(region.biome));

        if (cell.hasObstacle == 1) {
            let img = document.createElement("img");
            img.setAttribute("src", region.obstacleImgUrl);
            img.setAttribute("draggable", "false");
            img.classList.add("img-fluid");
            td.appendChild(img);
        } else if (cell.monster !== null && cell.monster !== undefined) {
            let img = document.createElement("img");
            img.setAttribute("src", cell.monster.image);
            img.setAttribute("id", cell.monster.image);
            img.setAttribute("draggable", "true");
            img.classList.add("img-fluid");
            img.ondragstart = (ev) => {
                ev.dataTransfer.setData("id", ev.target.id);
            }
            td.appendChild(img);
        }

        td.ondragover = (ev) => {
            ev.preventDefault();
        }

        if (cell.hasObstacle != 1) {
            td.ondrop = (ev) => {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("id");
                ev.target.appendChild(document.getElementById(data));
            }
        }

        return td;
    }

    createRow() {

    }

    getClass(biome) {
        switch (biome) {
            case (Biome.ARCTIC):
                return "bg-arctic";
            case (Biome.JUNGLE):
                return "bg-jungle";
            case (Biome.DESERT):
                return "bg-desert";
        }
    }


}