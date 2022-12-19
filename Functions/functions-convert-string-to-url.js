function convertToURL(stringValue) {
  const specialCharacters = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  const stringValueWithoutSpecialCharacters = stringValue.replace(specialCharacters, "");
  return stringValueWithoutSpecialCharacters.toLowerCase().trim().replaceAll(" ", "-");
}

let string1 = 'The#* main task$ for us to ()( complete is to *)resolve user issues!!!';
let string2 = 'The#* rest of the tasks$ for us to ()( complete is to *)resolve other issues!!!';

document.getElementById('string1').innerHTML = convertToURL(string1);
document.getElementById('string2').innerHTML = convertToURL(string2);
