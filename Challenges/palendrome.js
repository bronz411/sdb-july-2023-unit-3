function isPalindrome(word) {
    let letterArr = word.split("")
    let reversedArr = letterArr.reverse()
    let joinedWord = reversedArr.join("")
    console.log(joinedWord, word);
    if (joinedWord.toLowerCase().replaceAll(" ", "") === word.toLowerCase().replaceAll(" ", "")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome2("racecar"));
console.log(isPalindrome2("Dad"));
console.log(isPalindrome2("JuNe"));
console.log(isPalindrome2("madam im adam"));

// ! Refactor above (same as above just way shorter)

function isPalindrome2 (word) {
    let combinedWord = word.split("").reverse().join("").toLowerCase().replaceAll(" ", "");
    word = word.toLowerCase().replaceAll(" ", "");
    return combinedWord === word ? true : false;

}
