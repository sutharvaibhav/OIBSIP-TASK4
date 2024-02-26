const signupNameField = document.getElementById('signupNameField');
const signupEmailField = document.getElementById('signupEmailField');
const signupPassField = document.getElementById('signupPassField');
const loginEmailField = document.getElementById('loginEmailField');
const loginPassField = document.getElementById('loginPassField');
const switchSignup = document.getElementById('switchSignup');
const loginBt = document.getElementById('loginBt');
const switchLogin = document.getElementById('switchLogin');
const signBtd = document.getElementById('signBt');
const logForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form")

switchSignup.addEventListener('click', function(){
    logForm.style.display = "none";
    regForm.style.display = "block";
});
switchLogin.addEventListener('click', function(){
    logForm.style.display = "block";
    regForm.style.display = "none";
});

function signUp(){
    if(signupNameField.value =="" || signupEmailField.value =="" || signupPassField.value ==""){
        alert("Fill the details first!");
    }
    else{
        let nameSignup = signupNameField.value;
        let emailSignup = signupEmailField.value;
        let passwordSignup = signupPassField.value;
        localStorage.setItem('nameSignup', nameSignup);
        localStorage.setItem('emailSignup', emailSignup);
        localStorage.setItem('passwordSignup', passwordSignup);
        logForm.style.display = "block";
        regForm.style.display = "none";
    }
}

function logIn(){
    let emailLogin = loginEmailField.value;
    let passwordLogin = loginPassField.value;
    let savedName = localStorage.getItem('nameSignup')
    let savedEmail = localStorage.getItem('emailSignup');
    let savedPassword = localStorage.getItem('passwordSignup');
    
    if(emailLogin == "" || passwordLogin == ""){
        alert("Fill the details first!");
    }
    else if(emailLogin == savedEmail && passwordLogin == savedPassword){
        alert("Hello ${savedName}!");
    }
    else{
        alert("Invaild credentials!")
    }
}
