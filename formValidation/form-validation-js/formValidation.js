/*
client-side form validation

built-in form validation
javascript validataion: the constraint validation API
*/

const email = document.getElementById("email");
email.addEventListener("input", function(event) {
  if (email.validity.typeMistmatch) {
    email.setCustomValidity("Please enter an E-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

// checked
const ValidationEvent = () => {
  // Storing Field Values In Variable
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  // Regular Expression For Email
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  // Conditions
  if (name != '' && email != '' ) {
    if (email.match(emailReg)) {
      alert("All type of validation has done on OnSubmit event.");return true;
    } 
  else {
    alert("All fields are required.....!");
    return false;
}