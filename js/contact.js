import * as emailjs from '@emailjs/browser';
import { validateName, validateEmail, validatePhoneNumber, validateMessage } from './utils';


export function handleForm() {
    let form = document.getElementById('contactForm')
    // let submitBtn = document.getElementById('submit-btn')

    form.addEventListener('submit', function (e) {
        // Prevent form submission
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn')
        submitBtn.disabled = true
        submitBtn.textContent = 'sending...'

        // Get form values
        const name = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form values
        if (!validateName(name)) {
            alert('Invalid name');
            return;
        }

        if (!validateEmail(email)) {
            alert('Invalid email');
            return;
        }

        if (phone && !validatePhoneNumber(phone)) {
            alert('Invalid phone number');
            return;
        }

        if (!validateMessage(subject)) {
            alert('Empty subject');
            return;
        }

        if (!validateMessage(message)) {
            alert('Empty Message');
            return;
        }

        // Send email via EmailJS
        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        }, import.meta.env.VITE_PUBLIC_KEY)
            .then(function (response) {
                alert('We will reach out to you as soon as possible', response.status, response.text);
                submitBtn.disabled = false
                submitBtn.textContent = 'Submit Message'
            }).catch(function (error) {
                alert('Failed to generate an email please try again later', error);
                submitBtn.disabled = false
                submitBtn.textContent = 'Submit Message'
            })
    });
}