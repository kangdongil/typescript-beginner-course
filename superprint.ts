type SuperPrint = {
    <T, M>(arr: T[], b:M): T
}

/*
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}
*/

/*
type SuperPrint = {
    (arr: number[]):void
    (arr: boolean[]):void
    (arr: string[]):void
    (arr: (number|boolean)[]):void
}
*/

const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint([1, 2, 3, 4], 4)
const b = superPrint(["a", "b", "c"], "x")
const c = superPrint([true, false, true, false], false)
const d = superPrint([1, 2, true, false], 3)

