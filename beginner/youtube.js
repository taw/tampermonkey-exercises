// ==UserScript==
// @name       Hide all youtube comments
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match  http://www.youtube.com/*
// @match  https://www.youtube.com/*
// ==/UserScript==

// Task: Hide all comments on youtube, since they're pretty much all stupid.

// Hints:
// * Comments are in div with id `watch-discussion`
// * `$("#some_id")` selects all documents with given id (presumably no more than one).
// * Setting CSS property `display` to `none` hides an object.
// * `$("some_selector").css("some_attribute", "some_value")` overrides CSS on objects.
