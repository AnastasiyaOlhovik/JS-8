import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const textarea = document.querySelector(`textarea`);
const email = document.querySelector(`input`)

const userData = {
    email: '',
    message: '',
};


FormVale();

function FormVale() {
    const saveFormValue = JSON.parse(
        localStorage.getItem('feedback-form-state')
    );

    if (saveFormValue) {
        email.value = saveFormValue.email;
        textarea.value = saveFormValue.message;

        userData.email = saveFormValue.email;
        userData.message = saveFormValue.message;
    }
}


form.addEventListener('input', throttle((e) => {
    userData[e.target.name] = e.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
},500))


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (userData.email === '' || userData.message === '') {
        return alert('All fields must be filled!');
    } else {

        userData.email = '';
        userData.message = '';

        e.currentTarget.reset();

        localStorage.removeItem('feedback-form-state');

        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

})



