type Config = {
    path:string
    state:object
}

type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config)
    console.log(config.path)
}