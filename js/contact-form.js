document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was‑validated');
      return;
    }
    // simulate AJAX request
    setTimeout(() => {
      feedback.className = 'success';
      feedback.textContent = 'Thank you! Your message has been sent.';
      feedback.style.display = 'block';
      form.reset();
      form.classList.remove('was‑validated');
    }, 800);
  });

  // Initialize AOS scroll animations if using AOS lib
  if (window.AOS) AOS.init({ duration: 800, once: true });
});
