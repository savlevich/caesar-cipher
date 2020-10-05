const alphabets = {
  english: {
    numberOflatters: 26,
    characterCodes: {
      firstUppercase: 65,
      lastUppercase: 90,
      firstLowercase: 97,
      lastLowercase: 122,
    }
  }
};

// Can be expanded in other languages
const numberOfLatters = alphabets.english.numberOflatters;
const characterCodes = alphabets.english.characterCodes;

const encryptHandler = ({ text, shift }) => {
    let result = '';
    // debugger;
        // loop through each caharacter in the text
        for (let i = 0; i < text.length; i++) {
              
             // get the character code of each letter
            const characterCode = text.charCodeAt(i);
 
            // handle uppercase letters
            if (characterCode >= characterCodes.firstUppercase && characterCode <=  characterCodes.lastUppercase) {
               result += String.fromCharCode((characterCode - characterCodes.firstUppercase + shift) % numberOfLatters + characterCodes.firstUppercase); 
 
            // handle lowercase letters
            } else if (characterCode >= characterCodes.firstLowercase && characterCode <= characterCodes.lastLowercase) {
                result += String.fromCharCode((characterCode - characterCodes.firstLowercase + shift) % numberOfLatters + characterCodes.firstLowercase);
 
            // its not a letter, let it through
            } else {
                result += text.charAt(i);
            }
        }
    return result;
};
 
const decryptHandler = ({ text, shift }) => {
    let result = '';
    shift = (numberOfLatters - shift) % numberOfLatters;
    result = encryptHandler({ text, shift });
    return result;
};


module.exports = {
  encryptHandler,
  decryptHandler
}