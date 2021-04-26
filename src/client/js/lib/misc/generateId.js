const generateId = ()=>{

    let uniqueId ="";
    let counter = 0;

    while (counter<8)
    {
        const randomNumber =  Math.floor(1+Math.random()*10000)
        const randomString = randomNumber.toString(16).substring(1);
        uniqueId==="" ?uniqueId= uniqueId.concat(randomString):uniqueId= uniqueId.concat("-",randomString);
        counter +=1;
    }

    return uniqueId;

}

module.exports = {generateId};