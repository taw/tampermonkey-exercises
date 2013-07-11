// ==UserScript==
// @name       Make people's avatar photos on github larger.
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match  https://github.com/*
// ==/UserScript==

// Task: Make people's avatar photos on github larger so they're easier to identify.
$("img[src*='gravatar']").attr("width", 60).attr("height", 60);
