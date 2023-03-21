// decalare a funtion
    // make object return at end
    // loop over string for each character ...
    // If the char is a number/letter AND is key in object, add one to count
    // If the char is a number/letter AND is not key in objec, add it to object and set value to 1
    // If character is something else (space, period, etc) don't do anything
// return object at end

function charCount(str) {
    let result = {}
    for(let i = 0; i<str.length; i++) {
        let char = str[i]
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1
        }
    }
    return result 
}

console.log(charCount("Hello"))