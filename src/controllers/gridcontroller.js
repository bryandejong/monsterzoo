import GridView from "../views/gridview";
import Region, { Biome } from "../models/region";
import Grid from "../models/grid";

export default class GridController {

    constructor(createMonsterController) {
        this.gridView = new GridView(this);
        this.createMonsterController = createMonsterController;

        fetch("./maps/basicmaps.json").then(response => {
            response.json().then((json) => this.onFetched(json))
        });
    }

    onFetched(json) {
        this.initRegions(json);
        this.initGrid(this.jungleRegion);
    }

    //(Re)draws the grid with the given Region
    initGrid(region) {
        this.currentRegion = region;
        this.currentGrid = region.grid;
        this.gridView.draw(region);
    }

    //Initializes regions based on the supplied JSON
    initRegions(json) {
        let jungleGrid = new Grid(json[0].grid);
        this.jungleRegion = new Region(Biome.JUNGLE, jungleGrid, "http://piskel-resizer.appspot.com/resize?size=200&url=http%3A%2F%2Fwww.piskelapp.com%2Fimg%2F3e984282-b60a-11e6-9ca6-7d306cd46a56.png");

        let arcticGrid = new Grid(json[1].grid);
        this.arcticRegion = new Region(Biome.ARCTIC, arcticGrid, "https://cdn.pixabay.com/photo/2014/12/22/00/03/rock-576669_640.png");

        let desertGrid = new Grid(json[2].grid);
        this.desertRegion = new Region(Biome.DESERT, desertGrid, "http://1.bp.blogspot.com/-J_EktHWrtfA/T_QsusglTHI/AAAAAAAAA50/D95c2fXfKrg/s1600/Edge_Obstacle_Cacti.png");
    }

    switchRegion(regionName) {
        switch (regionName) {
            case (Biome.ARCTIC):
                this.initGrid(this.arcticRegion);
                break;
            case (Biome.JUNGLE):
                this.initGrid(this.jungleRegion);
                break;
            case (Biome.DESERT):
                this.initGrid(this.desertRegion);
                break;
        }
    }

    //Move a monster from the origin cell index to the target cell index.
    moveMonster(originIndex, targetIndex) {
        this.currentGrid.moveMonster(originIndex, targetIndex);
        this.gridView.draw(this.currentRegion);
    }

    removeMonster(index) {
        this.currentGrid.removeMonster(index);
        this.gridView.draw(this.currentRegion);
    }

    placeMonster(index) {
        let monster = this.createMonsterController.getMonster();
        this.currentGrid.placeMonster(index, monster);
        this.gridView.draw(this.currentRegion);
    }

    getMonster(index) {
        let monster = this.currentGrid.getCellByIndex(index).monster;
        return monster;
    }
}