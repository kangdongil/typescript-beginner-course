type Words = {
    [key:string]: string
}

/*
let dict: Words = {
    "potato": "food",
    "kimchi": "foood",
}
*/


class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] == word.def;
        }
    }
    def(term:string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string,
    ) {}
}

const kimchi = new Word("kimchi", "korean food");

const dict = new Dict()
dict.add(kimchi);
dict.def("kimchi");