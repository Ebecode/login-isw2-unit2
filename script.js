const myForm = document.querySelector('.form-container');
const uname = document.querySelector('#uname');
const pword = document.querySelector('#pword');
const login = document.querySelector('#login');
const heading = document.querySelector('.heading');
const textFields = document.querySelector('form');
const Password = 'su clave';

//Maximo Gomez 15-2766

let progress = document.createElement("progress");
progress.setAttribute("max",100);
progress.setAttribute("value",1);


let reload = document.createElement("button");
reload.textContent = 'Continuar';


function testForm() {
    if (pword.value === Password) {
        myForm.classList.add('say-yes');
        myForm.addEventListener('animationend',loadScreen,false);
        //setTimeout(loadScreen,2000);
        
    } else {
        pword.classList.add('wrong');
        myForm.classList.toggle('say-no');
        //myForm.addEventListener('animationend',stopNo,false);

    }
}
function testPwd () {
    if (pword.value) {
        myForm.classList.remove('say-no');
        pword.classList.remove('wrong');
    }
}
pword.addEventListener('click',testPwd,false);
login.addEventListener('click',testForm,false);

//Load screen
function loadScreen() {
    heading.textContent = 'Ingresando';
    myForm.removeChild(textFields);
    myForm.appendChild(progress);
    let amt = 1;
    let loading = setInterval(() => {
        amt += 1;
        progress.setAttribute('value',amt);
        if (progress.getAttribute('value') == 100) {
            
            clearInterval(loading);
            //alert('done');
            welcome();
        }
    }, 100);
}

//Welcome
function welcome(){
    heading.textContent = 'Bienvenido';
    myForm.removeChild(progress);
    myForm.appendChild(reload);
    reload.addEventListener('click',reloadPage,false);
}

function reloadPage() {
    location.reload();
}