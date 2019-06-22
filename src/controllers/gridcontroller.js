import GridView from "../views/gridview";
import GridLoader from "../models/gridloader";
import Region from "../models/region";

export default class GridController {

    constructor() {
        this.initRegions();

        fetch("./maps/basicmaps.json").then(response => {
            response.json().then(json => {
                this.regions = json;
                this.initGrid();
            })
        });
    }

    initGrid() {
        this.currentRegion = this.regions[0];
        this.gridView = new GridView();
        this.gridView.drawGrid(this.currentRegion.grid, this.desertRegion);
    }

    initRegions() {
        this.forestRegion = new Region("Forest", "bg-forest", "http://piskel-resizer.appspot.com/resize?size=200&url=http%3A%2F%2Fwww.piskelapp.com%2Fimg%2F3e984282-b60a-11e6-9ca6-7d306cd46a56.png");
        this.desertRegion = new Region("Desert", "bg-desert", "http://1.bp.blogspot.com/-J_EktHWrtfA/T_QsusglTHI/AAAAAAAAA50/D95c2fXfKrg/s1600/Edge_Obstacle_Cacti.png");
        this.arcticRegion = new Region("Artcic", "bg-arctic", "https://cdn.pixabay.com/photo/2014/12/22/00/03/rock-576669_640.png");
    }
}