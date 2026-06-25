const form = document.querySelector('#contactForm');
const note = document.querySelector('#formNote');

if (form) {
  form.addEventListener('submit', async (event) => {
    const action = form.getAttribute('action') || '';

    if (action.includes('REPLACE_ME')) {
      event.preventDefault();
      note.innerHTML = 'The form design works. To receive messages, create a free Formspree form and replace <strong>REPLACE_ME</strong> in index.html with your form ID.';
      note.style.color = '#b45309';
      return;
    }

    event.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        note.textContent = 'Message sent. Thank you.';
        note.style.color = '#0b6b32';
      } else {
        note.textContent = 'The message could not be sent. Please try again.';
        note.style.color = '#b91c1c';
      }
    } catch {
      note.textContent = 'The message could not be sent. Please check the form service connection.';
      note.style.color = '#b91c1c';
    }
  });
}
