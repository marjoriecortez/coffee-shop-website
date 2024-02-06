const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', function () {
  searchBox.classList.toggle('active');
});
