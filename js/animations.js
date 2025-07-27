// About 
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInUp");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll("section").forEach(section => {
    section.classList.add("animate__animated");
    observer.observe(section);
  });
});
// Collection
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const collectionCards = document.querySelectorAll(".collection-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      collectionCards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "";
          card.classList.add("animate-entry");
        } else {
          card.style.display = "none";
          card.classList.remove("animate-entry");
        }
      });

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
// COLLECTION CARD
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".collection-card");

  cards.forEach((card, index) => {
    card.classList.add("animate-entry");
  });
});
  document.addEventListener("DOMContentLoaded", () => {
    // Animate collection cards
    document.querySelectorAll(".collection-card").forEach(card => {
      card.classList.add("animate-entry");
    });

    // Animate headings
    document.querySelectorAll("h1, h2, h3").forEach(heading => {
      heading.classList.add("heading-animate");
    });

    // Animate buttons
    document.querySelectorAll(".btn").forEach(btn => {
      btn.classList.add("btn-animate");
    });
  });
