document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic validation (can be extended as needed)
        if (!data.name || !data.email || !data.message) {
            formMessage.textContent = 'All fields are required.';
            formMessage.style.color = 'red';
            return;
        }

        try {
            // Simulate form submission
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                formMessage.textContent = 'Your message has been sent!';
                formMessage.style.color = 'green';
                form.reset(); // Clear the form fields
            } else {
                formMessage.textContent = 'There was an error sending your message.';
                formMessage.style.color = 'red';
            }
        } catch (error) {
            formMessage.textContent = 'There was an error sending your message.';
            formMessage.style.color = 'red';
        }
    });
});
