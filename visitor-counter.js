(function () {
    'use strict';

    var badge = document.getElementById('visitor-count');
    if (!badge) return;

    function countPageView() {
        var nonce = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
        badge.alt = 'Website visit count: loading';
        badge.src = badge.getAttribute('data-counter-url') + '&_visit=' + encodeURIComponent(nonce);
    }

    badge.addEventListener('load', function () {
        badge.alt = 'Total website page views';
    });
    badge.addEventListener('error', function () {
        badge.alt = 'Website visit count: unavailable';
    });

    // Count immediately, even when the footer is outside the viewport.
    countPageView();

    // A back/forward-cache restore does not execute this script again.
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) countPageView();
    });
}());
