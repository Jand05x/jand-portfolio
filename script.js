document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const skillIcons = document.querySelectorAll('.skill-icon');
skillIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'translateY(-6px) rotate(3deg)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'translateY(0) rotate(0deg)';
  });
});