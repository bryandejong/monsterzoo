export default class Region {

    constructor(biome, bgClass, obstacleImgUrl) {
        this.biome = biome;
        this.bgClass = bgClass;
        this.obstacleImgUrl = obstacleImgUrl;
    }
}

export const Biome = {
    DESERT: "Desert",
    ARCTIC: "Arctic",
    JUNGLE: "Jungle"
}