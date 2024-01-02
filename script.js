//hacer el codigo para validar los campos
let elementName=document.getElementById("nombre");
let elementPassword=document.getElementById("password");
let elementNumtel=document.getElementById("telefono");
let elementEmail=document.getElementById("correo");
let elementCheckbox=document.getElementById("acuerdo");
let elementSubmit=document.getElementById("submit");

let colorInvalid="4px solid red";
let colorValid="4px solid green";


let nameValid = false;
let passwordValid = false;
let numtelValid=false;
let emailValid=false;
let checkboxValid=false;
let regexName = /[a-zA-Z ]{4,20}/;
let regexPassword = /^[a-zA-Z0-9]{6,}$/;
let regexNumTel=/^[0-9]{9}/;
let regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;


elementName.addEventListener("blur", validateName);
elementPassword.addEventListener("blur", validatePassword);
elementNumtel.addEventListener("blur", validateTel);
elementEmail.addEventListener("blur", validateEmail);
elementCheckbox.addEventListener("change", validateCheckbox);


function checkFullForm() {
    if (nameValid && passwordValid&&numtelValid&&checkboxValid) {
        elementSubmit.removeAttribute("disabled");
    } else {
        elementSubmit.setAttribute("disabled", "disabled");
    }
}
  
function validateName() {
    nameValid = regexName.test(elementName.value);

  
    if (!nameValid) {
        elementName.style.border = colorInvalid;
      
    } else {
        
        elementName.style.border = colorValid;
    }
  
    checkFullForm();
 
}
  
function validatePassword() {
    passwordValid = regexPassword.test(elementPassword.value);
  
    if (!passwordValid) {
        elementPassword.style.border = colorInvalid;
    } else {
        elementPassword.style.border = colorValid;
    }
  
    checkFullForm();
  }


  function validateTel() {
    numtelValid = regexNumTel.test(elementNumtel.value);

    if (!numtelValid) {
        elementNumtel.style.border = colorInvalid;
    } else {
        elementNumtel.style.border = colorValid;
    }

    checkFullForm();
}

function validateEmail() {
    emailValid = regexEmail.test(elementEmail.value);

    if (!emailValid) {
        elementEmail.style.border = colorInvalid;
    } else {
        elementEmail.style.border = colorValid;
    }

    checkFullForm();
}

 function validateCheckbox(){
    
    if (elementCheckbox.checked) {
        checkboxValid=true;
      } else {
        checkboxValid=false;
      }
    checkFullForm();
  }
