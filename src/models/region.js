export default class Region {

    constructor(biome, grid, obstacleImgUrl) {
        this.biome = biome;
        this.grid = grid;
        this.obstacleImgUrl = obstacleImgUrl;
    }
}

export const Biome = {
    DESERT: "Desert",
    ARCTIC: "Arctic",
    JUNGLE: "Jungle"
}