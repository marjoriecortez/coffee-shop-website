const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', function () {
  searchBox.classList.toggle('active');
});

window.onscroll = () => {
  searchBox.classList.remove('active');
};

let header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('shadow', window.scrollY > 0);
});
