const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const textarea = form.querySelector('textarea');

const formData = {
    email: "",
    message: ""
}

const formState = localStorage.getItem('feedback-form-state');

if (formState) {
    const jsonData = JSON.parse(formState);
    formData.email = jsonData.email;
    formData.message = jsonData.message;
    emailInput.value = formData.email;
    textarea.value = formData.message;
}

form.addEventListener('input', e => {
    formData.email = emailInput.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
})

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!(formData.email && formData.message)) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData)
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
})