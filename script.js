document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const year = document.getElementById('year');
  const scrollTopLink = document.querySelector('.scroll-top');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          target.setAttribute('tabindex', '-1');
          try {
            target.focus({ preventScroll: true });
          } catch (error) {
            target.focus();
          }
          target.addEventListener('blur', () => {
            target.removeAttribute('tabindex');
          }, { once: true });
        }
      }
    });
  });

  const toggleScrollTopVisibility = () => {
    if (!scrollTopLink) return;
    if (window.scrollY > 400) {
      scrollTopLink.classList.add('visible');
    } else {
      scrollTopLink.classList.remove('visible');
    }
  };

  toggleScrollTopVisibility();
  window.addEventListener('scroll', toggleScrollTopVisibility);
});
