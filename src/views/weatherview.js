export default class WeatherView {

    constructor(){
        this.regionElement = document.getElementById("region-name");
        this.temperatureElement = document.getElementById("region-temperature");
        this.descElement = document.getElementById("region-desc");
    }

    setRegionName(value){
        this.regionElement.innerHTML = value;
    }

    setTemperature(value) {
        this.temperatureElement.innerHTML = value;
    }

    setDescription(value) {
        this.descElement.innerHTML = value;
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

    getLocation(){
        return this.currentRegion.location;
    }
}