const containers = document.querySelectorAll('.container');

for (let container of containers) {
  const button = container.querySelector('.button');
  const containerContent = container.querySelector('.containerContent');

  button.addEventListener('click', () => {
    containerContent.classList.toggle('hidden');

    if (containerContent.classList.contains('hidden')) {
      button.innerHTML = 'EXIBIR';
    } else {
      button.innerHTML = 'ESCONDER';
    }
  });
}
