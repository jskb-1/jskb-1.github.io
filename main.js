let gotosingup = document.getElementById("gotosingup");
let signup = document.getElementById("signup");
let signin = document.getElementById("signin");

let gotosignin = document.getElementById("gotosignin");


let title = document.getElementById("title");



//переход от входа к регистрации
gotosingup.onclick = function() {
    signin.classList.add("hide");
    signup.classList.remove("hide");
    title.textContent = "Sign Up to name";

}

//переход от регистрации ко входу 
gotosignin.onclick = function() {
    signin.classList.remove("hide");
    signup.classList.add("hide");
    title.textContent = "Sign in to name";
}



//скрытие пароля по кнопке

let password = document.getElementById("password");

let password_control = document.getElementById("password-control");

password_control.onclick = function() {

    if (password.getAttribute('type') == 'text') {
        password.setAttribute('type', 'password');
        password_control.classList.add('open-eye');
        password_control.classList.remove('close-eye');
    } else {
        password.setAttribute('type', 'text');
        password_control.classList.remove('open-eye');
        password_control.classList.add('close-eye');
    }
}