document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img, picture, video').forEach(function (el) { el.remove(); });
});