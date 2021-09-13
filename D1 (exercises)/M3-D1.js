/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sumInt(value1, value2){

    if(value1 === value2){

        return (value1 + value2) * 3
    }else{
        return value1 + value2
    }


    
}



/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function trueOrNot (value1, value2){
    if(value1+value1 >= 50){
        return true
    }else if(value1 >= 50 || value2 >= 50){
        return true
    }else{
        return false
    }

}



/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function remove(position, str){

   

    return  str = str.slice(0, position) + str.substr(position +1 )
}




/* 4. Create a function to find and return the largest of three given integers. */

function findLargest(value1, value2){
    if(value1 > value2){
        return value1
    }else{
        return value2
    }
}


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

    function evaluate(a, b){
        if (a >= 40 && a <=60 && b >= 40 && b <= 60){
            return true
        }else if(a >= 70 && a <=100 && b >= 70 && b <= 100){
            return true
        }else{
            return false
        }
    }


    console.log(evaluate(40, 7))
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

    function copyString(n, str){
        for(let i = 0; i < n; i++){
            console.log(str)
        }
    }

    


/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

    function cityDisplay(city){

        let nameFirstLetters =  city.slice( city.lenght, 3)

        if(nameFirstLetters=== 'los' || nameFirstLetters === 'new'){
            return true
        }else{
            return false
        }


    }

    console.log(cityDisplay('new angeles'))


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

    let a = [0, 2, 3]
    let sum = 0
    
    function sumInArray(arr){
        
        
        for(let i = 0; i<arr.lenght; i++){
            
             sum = sum + arr[i]
             
             
        }
        return sum
        
    }

console.log(sumInArray(a))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

    let b = [3,2]
    function testAray(arr){

        if(arr[0]=== 1 || arr[0]=== 3 ){
            return true
        }else if(arr[1]=== 3 || arr[1]=== 3 ){
            return true

        }else{
            return false
        }

    }


console.log(    testAray(b)
)
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 



    function testAray2(arr){
        if(arr[0]=== 1 || arr[0]=== 3 ){
            return false
        }else if(arr[1]=== 3 || arr[1]=== 3 ){
            return false

        }else{
            return true
        }
    }


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 


let arraywhatever = ['dd', 'lllll', 'dsada']
    function findLongestWord(array) {
        let longestWord = ""
      
        array.forEach(function(word) {
          if(word.length > longestWord.length) {
            longestWord = word
          }
        })
      
        return longestWord
      }
      
console.log(findLongestWord(arraywhatever))


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
function getAngle(angle) {
    if(angle < 90) {
      return "Acute"
    }
    if(angle === 90) {
      return "Right"
    }
    if(angle < 180) {
      return "Obtuse"
    }
    return "Straight"
  }
  




/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

let givenrArray = [21, 321, 4344]
function gelement(arr){

    arr.sort()
    let n = arr.lenght
     return arr[arr.length-1]

}

console.log(gelement(givenrArray))



/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
let  evenNumbersarrayE = [1, 2, 3, 4, 5, 6];

let largestEvenNumber = 0
function findLeven(arr){
    let listOfeven = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                listOfeven.push(arr[i])
            }
        }

        listOfeven.sort()
        return largestEvenNumber = listOfeven[listOfeven.length-1]

    }

console.log(findLeven(evenNumbersarrayE))


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


    function negativePositive (int1, int2){
        if (int1 < 0 && int2 > 0){
            return true
        }else if(int1 > 0 && int2 < 0){
            return true
        }else{
            return false
        }
    }

    console.log(negativePositive(-1, 1))


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

     let randomSTR = 'Convert'

    function stringMod (str){

        return str.toUpperCase().slice(0,3) + str.slice(3)

    }

 console.log(stringMod(randomSTR))


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

    function sumOf2int(int1, int2){
        let sum = int1 + int2
        if(sum >= 50 && sum <= 80){
            return 65
        }else{
            return 80
        }

    }

    console.log(sumOf2int(20, 61))


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

function returnBasedOnFactor(num){

    let nameR = ''


    // check if number is a factor
    if(num % 3 === 0) {
        nameR = nameR + "Diego"

        if( num % 5 ===0){
            nameR = nameR + 'Riccardo'
        }else if(num % 7 === 0){
            nameR = nameR + 'Stefano'
        }

    }else if( num % 5 ===0 ){
        nameR = nameR + 'Riccardo'
         if(num % 7 === 0){
            nameR = nameR + 'Stefano'
        }
    }else if(num % 7 === 0){
        nameR = nameR + 'Stefano'
    }else{
        return num
    }

    return nameR


}



console.log(returnBasedOnFactor(15))


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

function acronymMaker(str){
    let firstLetters = []
   
   for(let i = 0; i< str.split(' ').length; i++){
    firstLetters.push(str.split(' ')[i].slice(0,1))
   }
   
   return firstLetters.join('').toLocaleUpperCase()



}