// ==UserScript==
// @name       Hide all youtube comments
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match  http://www.youtube.com/*
// @match  https://www.youtube.com/*
// ==/UserScript==

// Task: Hide all comments on youtube, since they're pretty much all stupid.
$("#watch-discussion").css('display', 'none');
