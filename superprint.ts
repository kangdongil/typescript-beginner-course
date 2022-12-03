function superPrint<V>(a: V[]){
    return a[0]
}

const a = superPrint([1, 2, 3, 4])
const b = superPrint(["a", "b", "c"])
const c = superPrint([true, false, true, false])
const d = superPrint([1, 2, true, false])

