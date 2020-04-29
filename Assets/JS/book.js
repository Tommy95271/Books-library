document.addEventListener('DOMContentLoaded', function() {
	const bookList = document.querySelector('#book-list');
	console.log(`book list node type: ${bookList.nodeType}`);
	console.log(`book list node name: ${bookList.nodeName}`);
	console.log(`book list parent element: ${bookList.parentElement}`);
	console.log(`book list parent node: ${bookList.parentNode}`);

	console.log(`all node children: ${Array.from(bookList.childNodes)}`);
	console.log(Array.from(bookList.childNodes));
	Array.from(bookList.childNodes).forEach(function(node) {
		console.log(node);
	});

	console.log(`all element children ${Array.from(bookList.children)}`);
	console.log(Array.from(bookList.children));
	Array.from(bookList.children).forEach(function(node) {
		console.log(node);
	});

	const titles = document.querySelectorAll('.name');
	console.log(`${titles}`);
	console.log(titles);
	console.log(`Book titles ${titles}`);
	console.log('Bookd titles' + titles);
	Array.from(titles).forEach(function(title) {
		console.log(title);
	});
});
