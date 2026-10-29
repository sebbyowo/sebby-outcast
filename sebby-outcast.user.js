 // ==UserScript==
 // @name         Outcast.run - Sebby Profile Button
 // @namespace    https://outcast.run/
 // @version      1.0
 // @description  Adds a button linking to sebby.2's profile
 // @match        https://outcast.run/*
 // @grant        none
 // @run-at       document-idle
 // ==/UserScript==

(function () {
    'use strict';

    const PROFILE_URL = 'https://outcast.run/u/sebby.2';
    const BUTTON_ID = 'tm-sebby-profile-button';

    function addProfileButton() {
        const nav = document.querySelector('.imgui-body');

        if (!nav || document.getElementById(BUTTON_ID)) return;

        const button = document.createElement('a');
        button.id = BUTTON_ID;
        button.className = 'imgui-item';
        button.href = PROFILE_URL;

        const label = document.createElement('span');
        label.textContent = 'sebby';
        button.appendChild(label);

        // Insert above the existing profile link, if present.
        const existingProfile = Array.from(nav.querySelectorAll('a.imgui-item'))
            .find(link => link.getAttribute('href') === '/u/sebby.2');

        if (existingProfile) {
            nav.insertBefore(button, existingProfile);
        } else {
            nav.appendChild(button);
        }
    }

    addProfileButton();

    // Handle sidebar re-renders and client-side page changes.
    const observer = new MutationObserver(addProfileButton);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
