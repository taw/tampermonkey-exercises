// ==UserScript==
// @name       Open all external Wikipedia links in new tab
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match  http://en.wikipedia.org/*
// @match  https://en.wikipedia.org/*
// ==/UserScript==

// Task: Make all external links in Wikipedia open in new tab.
$("a.external").attr("target", "_blank");
