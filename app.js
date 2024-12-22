// Initialize EmailJS
emailjs.init("6YxavNlPL7rZCw0JU"); // Replace with your EmailJS Public Key

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
        .send("service_tm5154b", "template_29dr4bh", formData) // Replace with your EmailJS Service ID and Template ID
        .then(
            function (response) {
                document.getElementById("status-message").innerText =
                    "Thank you! Your message has been sent successfully.";
                document.getElementById("status-message").style.color = "green";
                document.getElementById("contact-form").reset();
            },
            function (error) {
                document.getElementById("status-message").innerText =
                    "Sorry, there was an error. Please try again.";
                document.getElementById("status-message").style.color = "red";
            }
        );
});
