type Player = {
    readonly name: string,
    age?: number,
}

const playerNico : Player = {
    name: "nico",
}

const playerLynn : Player = {
    name: "lynn",
    age: 12,
}

const playerMaker = (name:string) : Player => ({name})

/*
function playerMaker(name:string) : Player {
    return {
        name,
    }
}
*/

const nico = playerMaker("nico")
nico.age = 12
// nico.name = "las" <- Error caused by Read-only Type

const player: [string, number, boolean] = ["nico", 1, true]
// assign array item's length, types, sequence