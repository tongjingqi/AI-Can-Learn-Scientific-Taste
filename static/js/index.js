(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supportsReveal = 'IntersectionObserver' in window && !prefersReducedMotion;

  if (supportsReveal) {
    document.documentElement.classList.add('motion-ready');
  }

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

    var revealSections = document.querySelectorAll('.reveal-section');

    if (!supportsReveal) {
      revealSections.forEach(function (section) {
        section.classList.add('is-visible');
      });
      return;
    }

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    revealSections.forEach(function (section) {
      revealObserver.observe(section);
    });
  });
}());
