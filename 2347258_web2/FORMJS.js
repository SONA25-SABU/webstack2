const form = document.getElementById('feedback-form');
const fullNameInput = document.getElementById('Name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('COMMENT');

const statusElements = {
    fullName: document.getElementById('fullNameStatus'),
    email: document.getElementById('emailStatus'),
    password: document.getElementById('commentStatus'),
   
};


const nameRegex = /^[a-zA-Z\s]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function updateStatus(element, isValid, message) {
    statusElements[element].textContent = message;
    statusElements[element].className = isValid ? 'success-icon' : 'error-icon';
}

fullNameInput.addEventListener('input', () => {
    const isValid = nameRegex.test(fullNameInput.value);
    updateStatus('Name', isValid, isValid ? 'Valid' : 'Invalid');
});

emailInput.addEventListener('input', () => {
    const isValid = emailRegex.test(emailInput.value);
    updateStatus('email', isValid, isValid ? 'Valid' : 'Invalid');
});
 
    submitBtn.disabled = !(
        nameRegex.test(fullNameInput.value) &&
        emailRegex.test(emailInput.value) &&
       isValid
    );


form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Registration submitted!');
});




