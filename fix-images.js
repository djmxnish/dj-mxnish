document.addEventListener('DOMContentLoaded', function () {
  const photos = document.querySelectorAll('.media-card img');
  const sources = [
    'assets/dj-mxnish-about.webp',
    'assets/dj-mxnish-live.webp'
  ];

  photos.forEach(function (img, index) {
    if (!sources[index]) return;
    img.src = sources[index] + '?v=1';
    img.addEventListener('error', function () {
      img.style.display = 'none';
      const card = img.closest('.media-card');
      if (card) card.classList.add('media-failed');
    }, { once: true });
  });
});
