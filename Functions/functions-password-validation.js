function validatePassword(password) {
  let passwordValid = 'Your password is Valid';
  let passwordInvalid = 'Your password is Invalid';
  let lowerCaseCharacter = /(?=.+[a-z])/;
  let upperCaseCharacter = /(?=.+[A-Z])/;
  let digitCharacter = /(?=.+[0-9])/;
  let specialCharacter = /(?=.+[.,@/#!$%^&*;:{}=!\-_`~()'"])/;
  let passwordLength = /(?=.{10,})/;
  let passwordIsValid =
    lowerCaseCharacter.test(password) &&
    upperCaseCharacter.test(password) &&
    digitCharacter.test(password) &&
    specialCharacter.test(password) &&
    passwordLength.test(password);
  return passwordIsValid ? passwordValid : passwordInvalid;
}

const errorMsg = document.getElementById('errMsg');

function checkPassword() {
  errorMsg.style.display = 'block';
  errorMsg.innerHTML = validatePassword(password.value);
  password.value = '';
  setTimeout(function(){
    errorMsg.innerHTML = '';
    errorMsg.style.display = 'none';
    password.focus();
  }, 3000);
}
