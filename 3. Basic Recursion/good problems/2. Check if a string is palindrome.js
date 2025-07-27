// A palindrome is the string that is read same when reversed.

// // By using recursion, identify if the given string is a palindrome or not.

// function palindrome_checker(l, r, str) {
//   let temp;
//   if (l >= r) {
//     return;
//   }
//   temp = str[l];
//   str[l] = str[r];
//   str[r] = temp;
//   console.log(str, l, r);
//   palindrome_checker(++l, --r, str);
// }

// let name_str = "nitin";
// // let result = palindrome_checker(0, name_str.length - 1, name_str);
// // if (name_str === result) {
//   console.log("PALINDROME");
// // } else {
//   console.log("NOT A PALINDROME");
// }

// NOW THIS IS WHAT WE CALL A ROOKIE ERROR, STRINGS IN JAVASCRIPT ARE IMMUTABLE, I.E THE ASSIGNED ELEMENTS CANT BE UPDATED!

// My approach (the recursive function is dependent on a global variable,conditional; which is not good!).

// function palindrome_checker(r, str) {
//   let temp;
//   if (r<0) {
//     return;
//   }
//   another_str += str[r];
//   palindrome_checker( --r, str);
// }

// let another_str = '';
// let str = "";
// palindrome_checker(str.length - 1, str);

// if (str === another_str) {
//   console.log("PALINDROME");
// } else {
//   console.log("NOT A PALINDROME");
// }

// Optimized approach (two pointer approach).

// function palindrome(l, r, str) {
//   if (l >= r) {
//     return true;
//   } else if (str[l] == str[r]) {
//     return palindrome(++l, --r, str); // earlier, using 'palindrome(++l,--r,str);' was the issue as there was nothing to return for the previous functions when the last function call gives true/false.

//     // The line return palindrome(++l, --r, str); ensures that the boolean result (true or false) from the nested recursive calls correctly propagates all the way back up the call stack.
//   } else {
//     return false;
//   }
// }
// let str = "hello";
// console.log(palindrome(0, 4, str));

// Here, my issue was that I was only giving return value (true/false) to the last function. Cause while backtracking, rest of the functions in the recursive tree do not return anything, hence we get undefined as our answer. To fix that, we add 'return' to the line where we call the function itself, so when the last function calls return true/return false...the function gets its true/false and is then returned, giving its prev functions now a return value.




// TO OPTIMIZE IT EVEN MORE, we need to ignore the non-alphanumeric characters. SO:


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlphanumeric(char){
        return /^[a-z0-9]$/i.test(char);
    }

    function palindrome(l,r,str){
        if(l>=r){
            return true;
        }
        while(l<r && !isAlphanumeric(str[l])){
            ++l;
        }
        while(l<r && !isAlphanumeric(str[r])){
            --r;
        }
        if(l>=r){
            return true;
        }
        if(str[l].toLowerCase() == str[r].toLowerCase()){
            return palindrome(++l,--r,str);
        }
        else{
            return false;
        }
    }
    let result = palindrome(0,s.length-1,s);
    return result;
};