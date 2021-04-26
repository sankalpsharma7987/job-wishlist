const generateRandomColor = ()=>{

    const index = Math.floor(Math.random()*5);
    index<0?index=0:index;
    index>5?index=5:index;

    const colorArray = ["#90ee90","#ffa07a",'#007bb5','#5cb8d4','#3b5998','##fffc00']
    return  colorArray[index];
}

module.exports = {generateRandomColor};