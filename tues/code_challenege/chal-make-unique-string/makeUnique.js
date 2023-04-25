// // Write your solution below:
// Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu



const makeUnique = str => {
    //hash sets only contains unique values 
    let set = new Set(str)
    for(let i = 0; i < str.length; i++){
        set.add(str.charAt(i))
    }
    //array from creates a new shadow array from the set
    //joins into a string
    return Array.from(set).join('')
}
//create a new hashset with every char in the string
//create an array from the hashset
//join every letter from the array 
const makeUnique1 = str => [...new Set(str)].join('')


console.log(makeUnique1('iwanttoclimbamountain'))
console.log(makeUnique1('helloworld'))