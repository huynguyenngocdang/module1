function palindrome() {
    let input = document.getElementById("inputText").value;
    let result = "";
    if (isPalindrome(input)) {
        result = "TRUE";
    } else {
        result = "FALSE"
    };

    document.getElementById("result").innerHTML = result;
}

function isPalindrome(s) {
    let length = s.length;
    let result;
    let charForward = "";
    let charBackward = "";
    for (let i = 0; i < s.length; i++) {
        // charForward = s.charAt(i);
        // charBackward = s.charAt(s.length - 1 - i);
        // alert(charForward + charBackward);

        if (s.charAt(i) != s.charAt(length - 1 - i)) {
            result = false;
        } else {
            result = true;
        }
        
    }
    return result;
}