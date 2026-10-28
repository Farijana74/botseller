(function () {
  try {
    var t = localStorage.getItem("sv-theme");
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
