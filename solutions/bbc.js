// ==UserScript==
// @name          Rickroll BBC
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match         http://www.bbc.co.uk/*
// ==/UserScript==

// Task: Replace all links on BBC page with rickrolls
$("a").attr("href", "http://www.youtube.com/watch?v=dQw4w9WgXcQ");
