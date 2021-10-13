// Your code here
function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`;
}

function mondayWork(strung = 'go to the office'){
    return `This Monday, I will ${strung}.`
}

function wrapAdjective(detail = '*'){
    return function inner(defaul = 'string'){ 
        return `You are ${detail}${defaul}${detail}!` 
    }
}