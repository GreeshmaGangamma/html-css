/*function validation(){
	var input_text = document.getElementById("input_text").value;
	var input_password = document.getElementById("input_password").value;
    if(input_text=="" || input_password==""){
        alert("Please enter all the details");
        return false;
    }
    else if((input_text=="ad1234")&& (input_password=="admin123"))
    {
        
        window.open("http://127.0.0.1:8887/admin.html");
    }
    else{
        alert("Invalid details");
        return false;
    }
}*/
const validateNumberField = (text) => {
    return !isNaN(text) && !isNaN(parseFloat(text)) && text === "1234";
  };
  
  const validateTextField = (text) => {
    return text.trim().length !== 0 && text === "admin";
  };
  
  const hideAllValidations = () => {
    let validationElements = document.getElementsByClassName("validation");
    for (var i = 0; i < validationElements.length; i++) {
      validationElements[i].style.display = "none";
    }
  };
  
  const validator = (validationOutput, validationId) => {
    if (!validationOutput) {
      document.querySelector(`#${validationId}`).style.display = "block";
    }
    return validationOutput;
  };
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      hideAllValidations();
      document
        .querySelector("#submit")
        .addEventListener("click", function (event) {
          event.preventDefault();
          const name = document.querySelector("#name").value;
          const pswd = document.querySelector("#pswd").value;
         
         
          hideAllValidations();
          if (
            validator(validateTextField(name), "nameValidation") &&
            validator(validateNumberField(pswd), "pswdValidation")
            
          ){
              alert("login successful");
            window.open("http://127.0.0.1:8887/admin.html")
            }
            
        });
        
    },
    false
  );
  
