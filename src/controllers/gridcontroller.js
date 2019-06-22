import GridView from "../views/gridview";
import GridLoader from "../models/gridloader";
import Region, { Biome } from "../models/region";
import Grid from "../models/grid";

export default class GridController {

    constructor() {
        this.initRegions();
        this.gridView = new GridView(this);

        fetch("./maps/basicmaps.json").then(response => {
            response.json().then(json => {
                this.regions = json;
                this.currentRegion = this.regions[0];
                this.initGrid();
            })
        });
    }

    initGrid() {
        this.grid = new Grid(this.currentRegion.grid);
        this.gridView.drawGrid(this.grid, this.jungleRegion);
    }

    initRegions() {
        this.jungleRegion = new Region(Biome.JUNGLE, "bg-forest", "http://piskel-resizer.appspot.com/resize?size=200&url=http%3A%2F%2Fwww.piskelapp.com%2Fimg%2F3e984282-b60a-11e6-9ca6-7d306cd46a56.png");
        this.desertRegion = new Region(Biome.DESERT, "bg-desert", "http://1.bp.blogspot.com/-J_EktHWrtfA/T_QsusglTHI/AAAAAAAAA50/D95c2fXfKrg/s1600/Edge_Obstacle_Cacti.png");
        this.arcticRegion = new Region(Biome.ARCTIC, "bg-arctic", "https://cdn.pixabay.com/photo/2014/12/22/00/03/rock-576669_640.png");
    }

    switchRegion(regionName) {
        console.log("Switching region");
        switch (regionName) {
            case (Biome.ARCTIC):
                this.currentRegion = this.regions[1];
                this.initGrid();
                break;
            case (Biome.JUNGLE):
                this.currentRegion = this.regions[0];
                this.initGrid();
                break;
            case (Biome.DESERT):
                this.currentRegion = this.regions[2];
                this.initGrid();
                break;
        }
    }
}