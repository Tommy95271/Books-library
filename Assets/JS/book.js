document.addEventListener('DOMContentLoaded', function() {
	const bookList = document.querySelector('#book-list');
	console.log('#book-list next silbing', bookList.nextSibling);
	console.log('#book-list next element silbing', bookList.nextElementSibling);
	console.log('#book-list previous silbing', bookList.previousSibling);
	console.log('#book-list previous element silbing', bookList.previousElementSibling);

	bookList.previousElementSibling.querySelector('p').innerHTML += "<h1>It's a inserted h1</h1>";
});
