// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

//define an alphabet array 
//define ans sttring 
//let the first value of the string to be counter
//for loop through the string starting at 1
    //find the index of each letter in the alpha array
        //add the letter of the index+counter to ans

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const decoder = str => {
    let counter = Number(str.charAt(0))
    let ans = ''
    for(let i = 1; i < str.length; i++){
        let index = alpha.indexOf(str.charAt(i))
        ans += alpha[index+counter]
    }
    return ans;
}

//counter == str(0)
//turn the string into an array
//remove the first element
//alpha[(alpha.indexOf(arr[i]))+counter]

const decoder1 = str => {
    let counter = str.charAt(0)
    let ans = ''
    let arr = str.split('').splice(1)
    for(let i = 0; i < arr.length; i++){
        arr[i] = alpha[(alpha.indexOf(arr[i]))+counter]
    }
    return arr
}
console.log(decoder1('1a'))
console.log(decoder1('3ce'))
console.log(decoder1('2fcjjm'))