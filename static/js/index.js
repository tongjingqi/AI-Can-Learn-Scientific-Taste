(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.site-navbar');
    var navbarToggle = document.getElementById('navbar-toggle');
    var navbarMenu = document.getElementById('navbar-menu');

    function setMenuState(isOpen) {
      if (!navbarToggle || !navbarMenu) {
        return;
      }

      navbarToggle.classList.toggle('is-active', isOpen);
      navbarMenu.classList.toggle('is-active', isOpen);
      navbarToggle.setAttribute('aria-expanded', String(isOpen));
      navbarToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }

    if (navbarToggle && navbarMenu) {
      navbarToggle.addEventListener('click', function () {
        setMenuState(!navbarMenu.classList.contains('is-active'));
      });

      navbarMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          setMenuState(false);
        });
      });

      document.addEventListener('click', function (event) {
        if (navbarMenu.classList.contains('is-active') && navbar && !navbar.contains(event.target)) {
          setMenuState(false);
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navbarMenu.classList.contains('is-active')) {
          setMenuState(false);
          navbarToggle.focus();
        }
      });
    }

  });
}());
