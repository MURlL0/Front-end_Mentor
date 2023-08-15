const erro1 = document.querySelector('#erro1');
const erro2 = document.querySelector('#erro2');
const erro3 = document.querySelector('#erro3');
const erro4 = document.querySelector('#erro4');
const first = document.querySelector('#first');
const last = document.querySelector('#last');
const notEmail = document.querySelector('#notEmail');
const password = document.querySelector('#password');
const inputB = document.querySelector('.input');
const btn = document.querySelector('#btn');

function validar() {
    erro1.classList.remove('active');
    erro2.classList.remove('active');
    erro3.classList.remove('active');
    erro4.classList.remove('active');
    first.classList.remove('active');
    last.classList.remove('active');
    inputB.classList.remove('active');
    notEmail.classList.remove('active');
    password.classList.remove('active');

    if (document.login.name.value == '') {
        erro1.classList.add('active');
        first.classList.add('active');
        inputB.classList.add('active');
        return false;
    }
    if (document.login.lastName.value == '') {
        erro2.classList.add('active');
        last.classList.add('active');
        inputB.classList.add('active');
        return false;
    }

    if (document.login.email.value == '') {
        erro3.classList.add('active');
        notEmail.classList.add('active');
        inputB.classList.add('active');

        return false;
    }

    if (document.login.pass.value == '') {
        erro4.classList.add('active');
        password.classList.add('active');
        inputB.classList.add('active');
        return false;
    }
}

btn.onclick = validar;
