document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
    } else {
        alert('Please fill in all required fields.');
    }

    // Clear form after submission
    document.getElementById('contact-form').reset();
});
