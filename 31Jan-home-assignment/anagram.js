let text1="Listen"
let text2="Silent"

sortedText1 = text1.toLowerCase().split('').sort().join('');
sortedText2 = text2.toLowerCase().split('').sort().join('');
    console.log("Sorted text 1: " +sortedText1);
    console.log("Sorted text 2: " +sortedText2);
    if (sortedText1 === sortedText2) {
        console.log("Yes, it is an ANAGRAM")
    } else {
        console.log("No, it is not an ANAGRAM")
    }