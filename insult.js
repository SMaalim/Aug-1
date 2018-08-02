function insult (name){
    return `${name}, you doofus!`;
}
function insult (name){
    const randomNumber = Math.ceil(Math.random()*3);
    if (randomNumber===1){
        return `${name}, you doofus!`;
    }
    else if (randomNumber===2){
        return `${name}, you kirkuss!`;
    }
    else if (randomNumber===3){
        return `${name}, you dummy!`;
    }
}