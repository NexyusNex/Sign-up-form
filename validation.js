var fname = document.getElementById('fname');
var fnameE = document.getElementById('fnameError');

var lname = document.getElementById('lname');
var lnameE = document.getElementById('lnameError');

var email = document.getElementById('email');
var emailError = document.getElementById('emailError');

var tel = document.getElementById('tel');
var telE = document.getElementById('telError');

var pass = document.getElementById('password');
var passE = document.getElementById('passwordError');

var Cpsw = document.getElementById('confirm-pass');
var CpswE = document.getElementById('confirmError');

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
        emailError.textContent='*Please enter a valid email. ex(John@gmail.com).'
    } else {
        emailError.textContent='';
    }
})

tel.addEventListener('input', function(){
    if(tel.validity.patternMismatch){
        telE.textContent='*Please enter more than 6 digits';
    } else {
        telE.textContent='';
    }
})

pass.addEventListener('input', function(){
})

Cpsw.addEventListener('input', function(){
    if(pass.value!=Cpsw.value){
        CpswE.textContent='*Password does not match!';
    } else {
        CpswE.textContent='';
    }
})
