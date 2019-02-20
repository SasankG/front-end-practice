// Random JS questions
// FizzBuzz - common introductory question
fizzbuzz = (arr) => {
    for (var i = 0; i <= 100; i++) {
        // no multiples
        if (i % 3 != 0 && i % 5 != 0) {
            console.log(i)
        } else {
            if (i % 3 == 0) {
                console.log("fizz");
                skip =1
            }
            if (i % 5 == 0) {
                console.log('buzz')
                skip =1
            }
            if ((i % 3 == 0) && (i % 5 == 0)) {
                console.log('fizzbuzz')
            }
        }

    }
}
//fizzbuzz();

// Simple String Manipulations 
// Flip sentence until each word is reversed
let string = "New String";
// flip first word
let flipSentence = flipper(string, '')
// flip words in order
let flipWords = flipper(flipSentence, '')

function flipper(string, seperator){
    // split() splits the sentence string into multiple substrings
    // reverse() flips the string
    // join() is the oppoisite of split
    return string.split(seperator).reverse().join(seperator);
}


//Given 2 strings see if they are anagrams of each
let word1 = "Conan"
let word2 = "Nonac"

function checker(word1, word2){
    let a = word1.toLowerCase();
    let b  = word2.toLowerCase();

    // When doing string operations always split the strings into substrings
    a = split('').sort().join('');
    b = split('').sort().join('');
    if (a === b){
        console.log("They are anagrams")
    } else {
        console.log("They are not anagrams")
    }
}

// Check if a word is a palindrome
let palindrome = "level";

function palindromeChecker(word){
    // split into substrings and then reverse
    let reverseWord = word.split('').reverse().join('');

    if (word === reverseWord){
        console.log('They are palindromes')
    } else {
        console.log('They are not palindromes')
    }
}

// Padded Numbers
// Add 0 to numbers in an array, double  digit integers remain the same

let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function padder(arr){
    let padArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<10){
            padArr.push('0' + arr[i])
        } else{
            padArr.push(arr[i])
        }
    }
    console.log(padArr);
}

// What is '===' and why is it used
// -> ===: is a strict and type comparison, it compares both the primary type AND the content of the operands 

