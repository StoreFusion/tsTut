"use strict";
const isPlaindrome = (x) => {
    let reverseString = '';
    for (let char of x) {
        // append every character of string to the start of the reverseString
        reverseString = char + reverseString;
    }
    if (reverseString === x) {
        console.log("yeah a plaindrome");
    }
};
const checkIfPalindromeUsingTwoPointers = (x) => {
    if (x < 0)
        return false;
    let left = 0;
    let right = x.length - 1;
    while (left < right) {
        if (x[left] !== x[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
isPlaindrome("asa");
console.log(checkIfPalindromeUsingTwoPointers("asasa"));
