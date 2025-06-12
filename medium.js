//find the longest palindrome

function longestPalindrome(s) {
    if (s.length <2) return s;

    let start = 0;
    let longest = 1;

    //expand both left and right from each char
    let expand = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){

            if (right - left + 1 > longest) {
                longest = right - left + 1;
                start = left;
            }
            right++;
            left--;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }
    return s.substring(start, start+longest );
}

console.log(longestPalindrome("abacus"));

