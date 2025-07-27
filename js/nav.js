// After your header HTML is loaded
fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Now safely get elements
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('mobile-close-btn');

    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
      }
    });
  });
// 
fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(err => console.error('Failed to load footer:', err));
