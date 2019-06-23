export default class Region {

    constructor(biome, grid, obstacleImgUrl, location) {
        this.biome = biome;
        this.grid = grid;
        this.obstacleImgUrl = obstacleImgUrl;
        this.location = location;
    }
}

export const Biome = {
    DESERT: "Desert",
    ARCTIC: "Arctic",
    JUNGLE: "Jungle"
}