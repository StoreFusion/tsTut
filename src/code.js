var isPlaindrome = function (x) {
    var reverseString = '';
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var char = x_1[_i];
        // append every character of string to the start of the reverseString
        reverseString = char + reverseString;
    }
    if (reverseString === x) {
        console.log("yeah a plaindrome");
    }
};
var checkIfPalindromeUsingTwoPointers = function (x) {
    if (x < 0)
        return false;
    var left = 0;
    var right = x.length - 1;
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
