document.addEventListener("DOMContentLoaded", function () {
  // Floating animation for avatar
  const avatar = document.querySelector(".avatar");
  setInterval(() => {
    avatar.classList.toggle("animate-float");
  }, 6000);

  // Parallax effect for background elements
  window.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;

    const decorations = document.querySelectorAll(".decoration");
    decorations[0].style.transform = `translate(${moveX}px, ${moveY}px)`;
    decorations[1].style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  });

  // Add animation to skill items
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    // Trigger the animation after a delay
    setTimeout(() => {
      item.style.opacity = "1";
    }, 500);
  });

  // Add subtle hover effect to all animated elements
  const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-in"
  );
  animatedElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.02)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });
});
