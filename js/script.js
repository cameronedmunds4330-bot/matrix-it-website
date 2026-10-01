/* Matrix I.T. & Cybersecurity — Script */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Close mobile nav when a link is clicked
  var mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Contact form — front-end only, show confirmation
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('.form-message');
      if (msg) {
        msg.textContent = 'Thanks — your request has been received. An engineer will reach out within one business day.';
        msg.classList.add('success');
      }
      form.reset();
    });
  }
})();
