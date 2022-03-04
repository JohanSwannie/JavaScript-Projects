// Caesars Cipher - One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted
// by some set amount. A common modern use is the ROT13 cipher, where the values of the
// letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on. Write a function
// which takes a ROT13 encoded string as input and returns a decoded string. All letters 
// will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
// but do pass them on.

function rot13(str) {
  let afterCiphered = ''
  str.split('').forEach(digit => {
    const digitChr = digit.charCodeAt()
    let fromAscToDec = digitChr < 65 || digitChr > 90 ? digitChr : digitChr + 13
    if((fromAscToDec - 1) >= 90) {
      fromAscToDec = (((fromAscToDec - 1) - 90) + 65)
    }
    afterCiphered += String.fromCharCode(fromAscToDec)
  })
  return afterCiphered;
}

console.log(`The new string after ciphering is now --> '${rot13("SERR PBQR PNZC")}'`);
