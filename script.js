let form = document.querySelector('form');

let email = document.getElementById('email');

let buto = document.getElementById('buto');

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

let mensajerror = document.getElementById('error-message');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(email.value == "" || (!email.value.match(mailRegex))){
        //console.log('funciona');
        mensajerror.style.display = 'block';
        email.style.border = '2px solid #F40505';
        email.value = 'example@mail.com';
        email.style.color = '#F40505';
        
    } 
});