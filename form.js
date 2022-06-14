import countryList from "./countrylist.js";
const sub = document.getElementById("sub");    
const form = document.getElementById("form"); 

const password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const populateDropDown = (list,el) =>{
    const elem = document.getElementById(el);
    list.forEach(e => {  
        let opt = document.createElement('option');
        e.name == "Canada" ? (opt.value = e.code, opt.setAttribute('selected', true)) : opt.value = e.code;
        opt.textContent = e.name;
        elem.appendChild(opt);
        
    });


};
const formSubmit = () => {
    form.checkValidity() &&  alert("High Five"); 
      
};
sub.addEventListener('click', formSubmit);


populateDropDown(countryList,'country');