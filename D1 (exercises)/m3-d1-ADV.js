/* 1. Given a string (as a parameter), return the character that is most commonly used. */
function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''
  
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++
      } else {
        charMap[char] = 1
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char]
        maxChar = char
      }
    }
  
    return maxChar
  }

console.log(maxChar('justt'))


/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */

function anagramChecker(str1, str2){
    
    if(str1.split('').sort().join('')===str2.split('').sort().join('')){
        return true
    }else{
        return false
    }


    
}


console.log(anagramChecker('21','21' ))

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

let arrExample = ['example', 'enlist', 'dsada', 'inlets']

function anagramWordChecker(arr){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
       newArr.push( arr[i].split('').sort().join(''))

    }
    newArr.reverse()
    let arrAcro = []
   for(let i = 0; i<newArr.length; i++){
    if(newArr[0]===newArr[i]){
        arrAcro.push(newArr[i])
    }
   }

    return arrAcro
}

console.log(anagramWordChecker(arrExample))

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */


function polindChecker(str){
    let boolean 

    let reverseARR = []
    str.split('')
    for(let i = str.length-1; i>=0;i--){
        reverseARR.push(str[i])
    }
    

    if(reverseARR.join('') === str){
        return true
    }else{
         return false
    }
}
     


/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 ⇒ 981 */

function reversInt(int){
    let reversedINTER = int.toString().split('').reverse().join('')
    


    return reversedINTER

}

console.log(reversInt(123))

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/ 


/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" ⇒ "olleh" */


function reverese(str){

    let newARR= []
   str.split('')
    for(let i = str.length-1; i>=0;i--){
        newARR.push(str[i])
    }


   return  newARR.join('')

}

console.log(reverese('reverse'))


/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 → [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 → [[ 1, 2, 3, 4], [5]]
*/


/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/

function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = ''
        for (let j =0; j < rows - i; j++) output += ' '
        for (let k = 0; k <= i; k++) output += '* '
        console.log(output)
    } 
}

console.log(createPyramid(7))



/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/