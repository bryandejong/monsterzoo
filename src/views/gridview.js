import GridController from "../controllers/gridcontroller";
import { Biome } from "../models/region";
import { create } from "domain";
import { isNullOrUndefined } from "util";
import HoverPanelView from "./hoverpanelview";

export default class GridView {

    constructor(controller) {
        this.controller = controller;
        this.hoverPanelView = new HoverPanelView(controller);

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
        td.setAttribute("cell-index", cell.index);

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
                ev.dataTransfer.setData("originIndex", ev.target.parentElement.getAttribute("cell-index"));
            }

            img.oncontextmenu = (ev) => {
                ev.preventDefault();
                this.hoverPanelView.show(cell, ev.target.parentElement);
            }

            td.onmouseleave = (ev) => {
                this.hoverPanelView.hide();
            }

            td.appendChild(img);
        }

        td.ondragover = (ev) => {
            ev.preventDefault();
        }

        if (cell.hasObstacle != 1) {
            td.ondrop = (ev) => {
                ev.preventDefault();
                let originIndex = ev.dataTransfer.getData("originIndex");
                let targetIndex = ev.target.getAttribute("cell-index");
                if (targetIndex !== null && targetIndex !== undefined) {
                    if (originIndex !== null && originIndex !== undefined && originIndex !== "") {
                        this.controller.moveMonster(originIndex, targetIndex);
                    } else {
                        this.controller.placeMonster(targetIndex);
                    }
                }
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