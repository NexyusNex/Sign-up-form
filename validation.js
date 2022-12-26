var fname = document.getElementById('fname');
var fnameE = document.getElementById('fnameError');

var lname = document.getElementById('lname');
var lnameE = document.getElementById('lnameError');

var email = document.getElementById('email');
var emailError = document.getElementById('emailError');

var tel = document.getElementById('tel');
var telE = document.getElementById('telError');

fname.addEventListener('input', function(){
    if(fname.value==''){
        fnameE.textContent='*Please enter a valid name';
    } else {
        fnameE.textContent='';
    }
})

lname.addEventListener('input', function(){
    if(lname.value==''){
        lnameE.textContent='*Please enter a valid name';
    } else {
        lnameE.textContent='';
    }
})

email.addEventListener('input', function(){
    if(email.validity.typeMismatch){
        emailError.textContent='Please enter a valid email. ex(John@gmail.com).'
    } else {
        emailError.textContent='';
    }
})

tel.addEventListener('input', function(){
    if(tel.validity.patternMismatch){
        telE.textContent='Your enter more than 6 digits';
    } else {
        telE.textContent='';
    }
})
