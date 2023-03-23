const inputs = document.querySelectorAll(".input");


function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* only accept the string value */
var nameInput = document.getElementById("name");
nameInput.addEventListener("input", function(event) {
  var inputVal = nameInput.value;
  var regex = /[^A-Za-z]/gi;
  if (regex.test(inputVal)) {
    nameInput.value = inputVal.replace(regex, "");
  }
});
// Only allow number values in text input field
var numberInput = document.getElementById("phone");
numberInput.addEventListener("input", function(event) {
  var inputVal = numberInput.value;
  var regex = /[^0-9]/gi;
  if (regex.test(inputVal)) {
    numberInput.value = inputVal.replace(regex, "");
  }
});
// only accept if the @ symboll enter 
var emailInput = document.getElementById("email");
var emailError = document.getElementById("emailError");
emailInput.addEventListener("input", function(event) {
  if (!emailInput.checkValidity()) {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Email is required.";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Email is invalid.";
    } else if (emailInput.value.indexOf("@") == -1) {
      emailError.textContent = "Email is missing '@' symbol.";
    } else {
      emailError.textContent = "";
    }
  } else {
    emailError.textContent = "";
  }
});



