
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const roles = [
  'Technical Support',
  'Content Moderator',
  'Customer Specialist',
  'Web Enthusiast'
];

const typingElement = document.getElementById('typing');

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingElement.textContent = currentRole.slice(0, charIndex++);
  } else {
    typingElement.textContent = currentRole.slice(0, charIndex--);
  }

  let speed = deleting ? 50 : 90;

  if (!deleting && charIndex === currentRole.length + 1) {
    deleting = true;
    speed = 1400;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      const bars = entry.target.querySelectorAll('.progress-bar');

      bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(item => observer.observe(item));
