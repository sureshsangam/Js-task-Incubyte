function add(numbers) {    
    function throwException(message) {
        throw new Error(message);
    }
    
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = ",";
    let numberString = numbers;
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);
    
    if (delimiterMatch) {
        delimiter = delimiterMatch[1];
        numberString = numbers.slice(delimiterMatch[0].length);
    }
    
    
    const numberArray = numberString.split(new RegExp(`[${delimiter},\n]`));
    
    
    const negatives = numberArray.filter(num => parseInt(num, 10) < 0);
    
    if (negatives.length > 0) {
        throwException(`negative numbers not allowed ${negatives.join(", ")}`);
    }
    
    // Convert numbers to integers and sum them up
    const sum = numberArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
    
    return sum;
}


console.log(add(""));         
console.log(add("1"));        
console.log(add("1,5"));      
console.log(add("//;\n1;2,5")); 


