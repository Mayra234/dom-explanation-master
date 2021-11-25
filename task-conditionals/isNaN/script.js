//isNaN
var favoriteColor = prompt('¿Cuál es tu color favorito?');

if (isNaN(favoriteColor)) {
  alert('La ropa de color ' + favoriteColor + ' es mi favorita.');
} else {
  alert('Error');
}
