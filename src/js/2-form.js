const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');


const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) {
    return;
  }

  try {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    // Підставляємо дані у поля форми
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.error('Error parsing data from localStorage', error);
  }
};

populateForm();


form.addEventListener('input', (event) => {
  const field = event.target.name;
  const value = event.target.value.trim(); 

  formData[field] = value;


  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Обробка події submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});