function add(...args){
    var sum = 0;
    for(var i = 0; args[i] != undefined; i++){
        sum += args[i]
    }
    return sum
    // return args.reduce((previousValue, currentValue) => previousValue + currentValue)
}

function multiply(...args){
    sum = 1
    for(var i = 0; args[i] != undefined; i++){
        sum *= args[i]
    }
    return sum
}
console.log(add(1,5,8) + ' '+multiply(3,3))
module.exports = {add,multiply}