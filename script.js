// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});

// ── CHIP CYCLING ──
const chips = document.querySelectorAll('.chip');
let current = 0;

setInterval(function() {
  chips[current].style.borderColor = 'var(--border)';
  chips[current].style.color = 'var(--muted)';
  chips[current].style.background = 'transparent';

  current = (current + 1) % chips.length;

  chips[current].style.borderColor = 'var(--accent)';
  chips[current].style.color = 'var(--accent)';
  chips[current].style.background = 'rgba(200, 245, 90, 0.08)';
}, 900);

// ── CONTACT FORM ──
function handleSubmit() {
  const name  = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg   = document.getElementById('f-msg').value.trim();

  if (!name || !email || !msg) {
    const btn = document.getElementById('submit-btn');
    btn.style.background = '#f87171';
    btn.textContent = 'Please fill all fields';
    setTimeout(function() {
      btn.style.background = 'var(--accent)';
      btn.textContent = 'Send message →';
    }, 2000);
    return;
  }

  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}