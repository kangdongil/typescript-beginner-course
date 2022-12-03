type Player<E> = {
    name:string
    extraInfo:E
}
type NicoExtra = {
    favFood:string
}
type NicoPlayer = Player<NicoExtra>
//type NicoPlayer = Player<{favFood:string}>

const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn: Player<null> = {
    name: "lynn",
    extraInfo:null,
}

// Generics Form3
type Arr = Array<number>
let arr:Arr = [1,2,3,4]

// function printAllNumbers(arr: number[]) {...}
function printAllNumbers(arr: Array<number>) {
    
}

//React useState with Generics
`useState<number>()`
