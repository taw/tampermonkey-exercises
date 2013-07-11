// ==UserScript==
// @name       Open all external Wikipedia links in new tab
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match  http://en.wikipedia.org/*
// @match  https://en.wikipedia.org/*
// ==/UserScript==

// Task: Make all external links in Wikipedia open in new tab.

// Hints:
// * external links on Wikipedia all have class 'external'
// * Settinc attribute `target` to `_blank` makes links open in new window.
// * `$("some_tag.some_class")` finds all elements with given tag and class.
// * `$("some_selector").attr("some_attribute", "some_value")` changes attribute.
