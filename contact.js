// Reveal on interaction to discourage basic address harvesting.
// This is lightweight obfuscation, not protection against advanced crawlers.
const emailButton = document.querySelector('.email-reveal');

if (emailButton) {
  emailButton.hidden = false;
  emailButton.addEventListener('click', () => {
    const address = String.fromCharCode(
      103, 111, 110, 103, 104, 117, 105, 106, 105, 110, 103, 46,
      99, 114, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109
    );
    const link = document.createElement('a');
    link.className = 'contact-email';
    link.href = 'mailto:' + address;
    link.textContent = address;
    emailButton.replaceWith(link);
    link.focus();
  }, { once: true });
}
