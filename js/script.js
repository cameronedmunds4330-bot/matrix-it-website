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

// Matrix rain effect in the hero
(function () {
  var c = document.getElementById('matrix-rain');
  if (!c || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ctx = c.getContext('2d'), size = 16, drops = [];
  function resize() {
    c.width = c.offsetWidth; c.height = c.offsetHeight;
    drops = Array(Math.ceil(c.width / size)).fill(0).map(function () { return Math.random() * -50; });
  }
  resize(); window.addEventListener('resize', resize);
  function draw() {
    ctx.fillStyle = 'rgba(4, 8, 6, 0.12)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#3dff7f';
    ctx.font = size + 'px "IBM Plex Mono", monospace';
    for (var i = 0; i < drops.length; i++) {
      ctx.fillText(Math.random() > 0.5 ? '1' : '0', i * size, drops[i] * size);
      if (drops[i] * size > c.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 60);
})();
