document.addEventListener("DOMContentLoaded", function () {
    // Navbar transparency effect on scroll
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm", "bg-dark");
      } else {
        navbar.classList.remove("shadow-sm", "bg-dark");
      }
    });
  
    // Auto-scrolling testimonial carousel (if applicable)
    const testimonialImages = document.querySelectorAll(".profile-img");
    let currentIndex = 0;
  
    function showNextTestimonial() {
      testimonialImages[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % testimonialImages.length;
      testimonialImages[currentIndex].classList.add("active");
    }
  
    setInterval(showNextTestimonial, 5000);
  
    // Smooth scrolling for navbar links
    document.querySelectorAll(".navbar a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Search bar focus effect
    const searchInput = document.querySelector(".form-control");
    searchInput.addEventListener("focus", function () {
      this.style.boxShadow = "0px 0px 10px rgba(0, 191, 255, 0.5)";
    });
    searchInput.addEventListener("blur", function () {
      this.style.boxShadow = "none";
    });
  
    // Button click animation
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("mousedown", function () {
        this.style.transform = "scale(0.95)";
      });
      btn.addEventListener("mouseup", function () {
        this.style.transform = "scale(1)";
      });
    });
  });
  