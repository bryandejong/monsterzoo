import GridView from "../views/gridview";
import Region, { Biome } from "../models/region";
import Grid from "../models/grid";
import TextBubbleView from "../views/textbubbleview";

export default class GridController {

    constructor(createMonsterController) {
        this.gridView = new GridView(this);
        this.createMonsterController = createMonsterController;
        this.rainCanvas();

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
        this.triggerSurroundingIndices(targetIndex);
    }

    removeMonster(index) {
        this.currentGrid.removeMonster(index);
        this.gridView.draw(this.currentRegion);
    }

    rainCanvas() {

        var canvas = document.getElementById("rainCanvas");

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var w = canvas.width;
            var h = canvas.height;
            ctx.strokeStyle = 'rgba(174,194,224,0.5)';
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';


            var init = [];
            var maxParts = 1000;
            for (var a = 0; a < maxParts; a++) {
                init.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 1,
                    xs: -4 + Math.random() * 4 + 2,
                    ys: Math.random() * 10 + 10
                })
            }

            var particles = [];
            for (var b = 0; b < maxParts; b++) {
                particles[b] = init[b];
            }

            function draw() {
                ctx.clearRect(0, 0, w, h);
                for (var c = 0; c < particles.length; c++) {
                    var p = particles[c];
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                    ctx.stroke();
                }
                move();
            }

            function move() {
                for (var b = 0; b < particles.length; b++) {
                    var p = particles[b];
                    p.x += p.xs;
                    p.y += p.ys;
                    if (p.x > w || p.y > h) {
                        p.x = Math.random() * w;
                        p.y = -20;
                    }
                }
            }

            setInterval(draw, 50);

        }
    }

    placeMonster(index) {
        let monster = this.createMonsterController.getMonster();
        this.currentGrid.placeMonster(index, monster);
        this.gridView.draw(this.currentRegion);
        this.triggerSurroundingIndices(index);
    }

    getMonster(index) {
        let monster = this.currentGrid.getCellByIndex(index).monster;
        return monster;
    }

    triggerSurroundingIndices(index) {
        let x = index % this.currentGrid.width;
        let y = Math.floor(index / this.currentGrid.height);

        this.triggerIndex(x - 1, y);
        this.triggerIndex(x + 1, y);
        this.triggerIndex(x, y - 1);
        this.triggerIndex(x, y + 1);

    }

    triggerIndex(x, y) {
        let cell = this.currentGrid.getCell(x, y);
        if (cell == null || cell == undefined) {
            return;
        } else if (cell.monster == null || cell.monster == undefined) {
            return;
        }

        let index = this.currentGrid.getIndex(x, y);
        new TextBubbleView(index);
    }
}