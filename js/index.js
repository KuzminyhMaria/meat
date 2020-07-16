let callButtonsLoginWindow = document.querySelectorAll(".login");
let buttonsLogin = document.querySelectorAll(".login-window__form-button");
let callButtonsCheckinWindow = document.querySelectorAll(".checkin");
let buttonCheckin = document.querySelector(".checkin-window__form-button");
let callButtonsPasswordRecoveryWindow = document.querySelector(".password-recovery");
let buttonPasswordRecovery = document.querySelector(".password-recovery-window__form-button");
let buttonsClose = document.querySelectorAll(".close-button");

let windowLogin = document.querySelector(".login-window");
let windowCheckin = document.querySelector(".checkin-window");
let windowPasswordRecovery = document.querySelector(".password-recovery-window");

let selectOfCheckinWindow = document.querySelector(".checkin-window__form-item_select");
let selectOfCheckinWindowSecondName = document.querySelector(".checkin-window__form-item_second-name");
let selectOfCheckinWindowFirstName = document.querySelector(".checkin-window__form-item_first-name");
let selectOfCheckinWindowINN = document.querySelector(".checkin-window__form-item_inn");

let CheckinWindowEmail = document.querySelector(".checkin-window__form-item_email");
let CheckinWindowPassword = document.querySelector(".checkin-window__form-item_password");
let CheckinWindowPasswordRepeated = document.querySelector(".checkin-window__form-item_password-repeated");

let PasswordRecoveryWindowEmail = document.querySelector(".password-recovery-window__form-item_email");

let regName = /[А-Я]{1}[а-я]+|[A-Z]{1}[a-z]+/;
let regINN = /\d{10}/;
let regEmail = /[a-z]+(\.|\-)?[a-z]+\@[a-z]+\.+[a-z]+/;

window.addEventListener('click', function(e) {
  for (let [index, element] of callButtonsLoginWindow.entries()) {
    if (element.contains(e.target)) {
      changeVisibility(windowCheckin, 'hidden');
      changeVisibility(windowPasswordRecovery, 'hidden');
      changeVisibility(windowLogin, 'visible')
      break;
    }
    if (!element.contains(e.target) && index ===  callButtonsLoginWindow.length - 1 && !windowLogin.contains(e.target)) {
      changeVisibility(windowLogin, 'hidden');
    }
  };

  for (let [index, element] of callButtonsCheckinWindow.entries()) {
    if (element.contains(e.target)) {
      changeVisibility(windowLogin, 'hidden')
      changeVisibility(windowPasswordRecovery, 'hidden');
      changeVisibility(windowCheckin, 'visible');
      break;
    }
    if (!element.contains(e.target) && index ===  callButtonsCheckinWindow.length - 1 && !windowCheckin.contains(e.target)) {
      changeVisibility(windowCheckin, 'hidden');
    }
  };

  if (!callButtonsPasswordRecoveryWindow.contains(e.target) && !windowPasswordRecovery.contains(e.target)) {
    changeVisibility(windowPasswordRecovery, 'hidden');
  }
});

callButtonsPasswordRecoveryWindow.addEventListener("click", function() {
  changeVisibility(windowLogin, 'hidden');
  changeVisibility(windowCheckin, 'hidden');
  changeVisibility(windowPasswordRecovery, 'visible');
});

buttonsClose.forEach((buttonClose) => buttonClose.addEventListener('click', () => changeVisibility(buttonClose.parentElement.parentElement, 'hidden')));

selectOfCheckinWindow.addEventListener("change", function(e) {
  switch(e.target.value) {
    case '1':
      changeVisibility(selectOfCheckinWindowINN, 'hidden');
      changeVisibility(selectOfCheckinWindowSecondName, 'visible');
      changeVisibility(selectOfCheckinWindowFirstName, 'visible');
      break;
    case '2':
      changeVisibility(selectOfCheckinWindowSecondName, 'hidden');
      changeVisibility(selectOfCheckinWindowFirstName, 'hidden');
      changeVisibility(selectOfCheckinWindowINN, 'visible');
      break;
  }
});

buttonCheckin.addEventListener("click", function() {
  let isValid = true;

  switch(selectOfCheckinWindow.value) {
    case '1':
      if (!validationCheck(selectOfCheckinWindowSecondName.value, regName)) {
        selectOfCheckinWindowSecondName.classList.add("not-valid");
        isValid = false;
      } else selectOfCheckinWindowSecondName.classList.remove("not-valid");
      if (!validationCheck(selectOfCheckinWindowFirstName.value, regName)) {
        selectOfCheckinWindowFirstName.classList.add("not-valid");
        isValid = false;
      } else selectOfCheckinWindowFirstName.classList.remove("not-valid");
      break;
    case '2':
      if (!validationCheck(selectOfCheckinWindowINN.value, regName)) {
        selectOfCheckinWindowINN.classList.add("not-valid");
        isValid = false;
      } else selectOfCheckinWindowINN.classList.remove("not-valid");
      break;
  }

  if (!validationCheck(CheckinWindowEmail.value.toLowerCase(), regEmail)) {
    CheckinWindowEmail.classList.add("not-valid");
    isValid = false;
  } else CheckinWindowEmail.classList.remove("not-valid");

  if (CheckinWindowPassword.value !== CheckinWindowPasswordRepeated.value ) {
    CheckinWindowPasswordRepeated.classList.add("not-valid");
    isValid = false;
  } else {
    CheckinWindowPasswordRepeated.classList.remove("not-valid");
  }
  if (CheckinWindowPassword.value === "") {
    CheckinWindowPassword.classList.add("not-valid");
    CheckinWindowPasswordRepeated.classList.add("not-valid");
    isValid = false;
  } else if (CheckinWindowPassword.value !== "") {
    CheckinWindowPassword.classList.remove("not-valid");
  }

  isValid ? console.log("Форма валидна") : console.log("Форма не валидна");
});

buttonPasswordRecovery.addEventListener("click", function() {
  let isValid = true;
  if (!validationCheck(PasswordRecoveryWindowEmail.value.toLowerCase(), regEmail)) {
    PasswordRecoveryWindowEmail.classList.add("not-valid");
    isValid = false;
  } else PasswordRecoveryWindowEmail.classList.remove("not-valid");
});

function changeVisibility(item, visibility) {
  visibility === 'visible' && item.classList.add("visible");
  visibility === 'hidden' && item.classList.remove("visible");
}

function validationCheck(value, reg) {
  if (!reg.test(value) || !(value === value.match(reg)[0])) return false;
  return true;
}