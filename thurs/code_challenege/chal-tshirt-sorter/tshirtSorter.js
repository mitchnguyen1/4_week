// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll



const tshirtSorter1 = str => {
    let array = str.split('')
    let small = array.filter(el => el === 's')
    let med = array.filter(el => el === 'm')
    let large = array.filter(el => el === 'l')
    let ans = [...small,...med,...large]
    return ans;
}
const tshirtSorter = str => str.split('').sort().reverse()

console.log(tshirtSorter('lms'))
console.log(tshirtSorter('smllms'))

