// Counts visits to the website's pages with GoatCounter (no cookies, see privacy.html).
// The totals show up at https://xfroot.goatcounter.com. Copies running on this computer
// (localhost, 127.x, [::1]) and pages opened from a file don't count.
(function () {
  if (!/^https?:$/.test(location.protocol) || /^(localhost|127\.|\[::1\]|0\.0\.0\.0)/.test(location.hostname)) return;
  var s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-goatcounter", "https://xfroot.goatcounter.com/count");
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
})();
