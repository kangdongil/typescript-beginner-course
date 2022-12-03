type Nickname = string
type Team = "red" | "blue" | "yellow"

interface Player {
    nickname: Nickname
    healthBar: number
    team: Team
}
/*
type Player = {
    nickname: Nickname,
    healthBar: number,
    team: Team
}
*/
const noru: Player = {
    nickname: "nico",
    healthBar: 10,
    team: "blue"
}

type Food = string;
const kimuchi:Food = "delicious"