// Function to validate name
export function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
}

// Function to validate email addresses
export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to validate phone numbers
export function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Function to validate message (check if it's not empty)
export function validateMessage(message) {
    return message.trim() !== '';
}
