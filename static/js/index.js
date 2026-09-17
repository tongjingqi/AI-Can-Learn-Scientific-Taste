(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.site-navbar');
    var toggle = document.getElementById('navbar-toggle');
    var menu = document.getElementById('navbar-menu');
    var research = document.getElementById('research-navigation');
    var researchToggle = document.getElementById('research-toggle');

    if (!navbar || !toggle || !menu || !research || !researchToggle) return;

    function setResearchState(open) {
      research.classList.toggle('is-active', open);
      researchToggle.setAttribute('aria-expanded', String(open));
    }

    function setMenuState(open) {
      toggle.classList.toggle('is-active', open);
      menu.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      if (!open) setResearchState(false);
    }

    toggle.addEventListener('click', function () {
      setMenuState(!menu.classList.contains('is-active'));
    });

    researchToggle.addEventListener('click', function () {
      setResearchState(!research.classList.contains('is-active'));
    });

    navbar.querySelectorAll('a[href]').forEach(function (link) {
      link.addEventListener('click', function () { setMenuState(false); });
    });

    document.addEventListener('click', function (event) {
      if (!navbar.contains(event.target)) setMenuState(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (research.classList.contains('is-active')) {
        setResearchState(false);
        researchToggle.focus();
      } else if (menu.classList.contains('is-active')) {
        setMenuState(false);
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 1024px)').addEventListener('change', function () {
      setMenuState(false);
    });
  });
}());
