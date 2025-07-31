document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Wysyłanie...';
  
    // Pobierz wartości z formularza
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      formMessage.textContent = 'Proszę wypełnić wszystkie pola.';
      formMessage.style.color = 'red';
      return;
    }
  
    // Tu można dodać integrację z usługą typu Formspree (darmowa)
    // Dla prostoty na razie tylko wyświetlamy podziękowanie
    setTimeout(() => {
      formMessage.style.color = 'green';
      formMessage.textContent = Dziękujemy za wiadomość, ${name}! Odezwę się jak najszybciej.;
      this.reset();
    }, 1000);
  });