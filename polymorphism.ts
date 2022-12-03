interface CustomStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: CustomStorage<T> = {}
    set(key:string, value:T) {
        this.storage[key] = value;
    }
    remove(key:string) {
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key");
stringStorage.set("hello", "hi");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("xxx");