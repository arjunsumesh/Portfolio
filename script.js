// Cycle through skill chips and highlight one at a time
const chips = document.querySelectorAll('.chip');
let current = 0;

setInterval(function() {
  // reset the current one back to normal
  chips[current].style.borderColor = 'var(--border)';
  chips[current].style.color = 'var(--muted)';
  chips[current].style.background = 'transparent';

  // move to next chip (loops back to 0 at the end)
  current = (current + 1) % chips.length;

  // highlight the new one
  chips[current].style.borderColor = 'var(--accent)';
  chips[current].style.color = 'var(--accent)';
  chips[current].style.background = 'rgba(200, 245, 90, 0.08)';

}, 900); // every 900 milliseconds