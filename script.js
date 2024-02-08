const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

// Search Icon
searchIcon.addEventListener('click', function () {
  searchBox.classList.toggle('active');
  navbar.classList.remove('active');
});

// Remove search box and nav bar when scrolling
window.onscroll = () => {
  searchBox.classList.remove('active');
  navbar.classList.remove('active');
};

const header = document.querySelector('header');

// Header
window.addEventListener('scroll', function () {
  header.classList.toggle('shadow', window.scrollY > 0);
});

// Menu Icon for responsive design
const navbar = document.querySelector('.navbar');
const menu = document.getElementById('menu-icon');

menu.addEventListener('click', function () {
  navbar.classList.toggle('active');
  searchBox.classList.remove('active');
});
