function sendingAmount(env, value){
    switch(env){
        case "dev" : return value * 1.1
        case "test" : return value * 1.2
        case "stage" : return value *1.3
        case "prod" : return value *1.05
        default : return "galat baat" 
    }
}
    var abc = sendingAmount("dev", 100)

    document.write(`The answer is ${abc.toFixed(2)}`)
