document.addEventListener('DOMContentLoaded', function() {
	var bookList = document.getElementById('book-list');
	var titles = document.getElementsByClassName('name');
	console.log(bookList, titles);
	var titles2 = document.querySelectorAll('#book-list li .name');
	console.log(titles2);
});
