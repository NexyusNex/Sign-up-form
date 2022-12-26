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
    var error='';
    if(tel.validity.patternMismatch){
        if(tel.value.length<6){
            error+='*Please enter more than 6 digits. ';
        }

        if(isNaN(tel.value)==false){
            error+=''
        } else {
            error+='*Please only enter numbers. ';
        }

        telE.textContent=error;
    } else{

    }
    
})

pass.addEventListener('input', function(){
    if(pass.validity.patternMismatch){
        var capital = /[A-Z]/g;
        var lowercase = /[a-z]/g;
        var number = /[0-9]/g;
        var errorText = '';
        
        //checks number

        if(number.test(pass.value)){
            errorText+='';
        } else {
            errorText+='Missing a number. \n';
        }

        //checks capital
        if(capital.test(pass.value)){
            errorText+='';
        } else {
            errorText+='Missing a capital letter. \n';
        }

        //checks lowercase

        if(lowercase.test(pass.value)){
            errorText+='';
        } else {
            errorText+='Missing a lowercase letter. \n';
        }

        //checks length
        if(pass.value.length<8){
            errorText+='Your password must contain at least 8 characters. \n';
        }

        passE.textContent=errorText;
    } else {
        passE.textContent='';
    }
    
})

Cpsw.addEventListener('input', function(){
    if(pass.value!=Cpsw.value){
        CpswE.textContent='*Password does not match!';
    } else {
        CpswE.textContent='';
    }
})
