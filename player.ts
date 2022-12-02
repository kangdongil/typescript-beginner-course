type Player = {
    name: string,
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
console.log(nico)