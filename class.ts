abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        protected nickname:string,
    ) {}
    abstract getNickname():void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


class Player extends User {
    getNickname() {
        console.log(this.nickname)
    }
}

const nico = new Player("nico", "las", "nico");
nico.getFullName()