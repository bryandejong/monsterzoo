import * as Monster from './monster.js';

function generate(){
    debugger;
    let monster = new Monster("Pikachu", Monster.type.AIR, 5, 5, 5, true, true, Monster.fur.FEATHERS, Monster.color.RED, "test");

    monster.printName();
    return (false);
};