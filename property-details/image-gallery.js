const images = document.querySelectorAll('.img-c img');

const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    document.body.classList.add('gallery-open');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.classList.remove('gallery-open');
});