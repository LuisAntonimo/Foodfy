const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');

const modal = document.querySelector('.modal');
const modalPicture = document.querySelector('.modal-picture');

for (let card of cards) {
  card.addEventListener('click', function() {
    const cardPicture = card.querySelector('.card-image, img').src;
    const cardTitle = card.querySelector('.card-title').innerHTML;
    const cardAuthor = card.querySelector('.author').innerHTML;

    modalOverlay.classList.add('active');
    modalOverlay.querySelector('.modal-title').innerHTML = `${cardTitle}`;
    modalOverlay.querySelector('.modal-author').innerHTML = `${cardAuthor}`;
    modalOverlay.querySelector('.modal-picture').src = `${cardPicture}`;
  });
}

const close = document.querySelector('#close');

close.addEventListener('click', function() {
  modalOverlay.classList.remove('active');
});
