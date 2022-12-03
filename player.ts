interface Person {
    firstName: string,
    lastName: string,
    sayHi(name:string): string,
    fullName():string
}

interface Human {
    health:number
}
/*
abstract class Person {
    constructor(
        protected firstName:string,
        protected lastName:string
    ) {}
    abstract sayHi(name:string):string
    abstract fullName():string
}
*/

class Payer implements Person, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number,
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

/*
class Payer extends Person {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}
*/

/*
function makeUser(user: Person) {
    return "hi"
}

makeUser({
    firstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string",
})
*/

function makeUser(user: Person): Person {
    return {
        firstName: "nico",
        lastName: "las",
        fullName: () => "xx",
        sayHi: (name) => "string",
    }
}