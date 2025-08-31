
const select = document.getElementById('issueSelect');
const label = document.getElementById('issueLabel');
const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const comment = document.getElementById('message')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateInputs()) {     
        popupConfirmation();
    }
});

// Update the css style of Select Issue

function updateLabel() {
    if(select.value !== "") {
        label.classList.add('floating-issue');
    }
    else {
        label.classList.remove('floating-issue');
    }
}

updateLabel();

// Update on each select of issue

select.addEventListener('change', updateLabel);

//Form Validation

// Error & Success

const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

const setSuccess = (element) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

const validateInputs = () => {

    let valid = true;

    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const issueValue = select.value;
    const commentValue = message.value.trim();


    //for First name
    if(fnameValue === '') {
        setError(fname, 'First Name is Required')
        valid = false;
    } else {
        setSuccess(fname);
    }

    //for last name
    if (lnameValue === '') {
        setError(lname, 'Last Name is required');
        valid = false;
    } else {
        setSuccess(lname);
    }

    //for email
    if (emailValue === '') {
        setError(email, 'Email is required');
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        setError(email, 'Provide a valid email');
        valid = false;
    } else {
        setSuccess(email);
    }

    //for select issue
    if (issueValue === '') {
    setError(select, 'Please select an issue');
    valid = false;
    } else {
    setSuccess(select);
    }

    //for comment
    if (commentValue === '') {
        setError(comment, 'Message is required');
        valid = false;
    } else {
        setSuccess(comment);
    }

    return valid;

}


//popup Conformation

const popupConfirmation = () => {

    const inputs = document.querySelectorAll('.form_input');
    const textarea = document.querySelector('.form_area');

    document.getElementById('out-first').textContent = inputs[0].value;
    document.getElementById('out-last').textContent = inputs[1].value;
    document.getElementById('out-email').textContent = inputs[2].value;
    document.getElementById('out-issue').textContent = inputs[3].value;
    document.getElementById('out-message').textContent = textarea.value;

    form.style.display = 'none';
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
    form.style.display = 'block';
}

