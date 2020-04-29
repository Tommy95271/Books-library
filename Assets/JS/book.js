document.addEventListener('DOMContentLoaded', function() {
	const bookList = document.querySelector('#book-list');
	console.log(`book list node type: ${bookList.nodeType}`);
	console.log(`book list node name: ${bookList.nodeName}`);
	console.log(`book list parent element: ${bookList.parentElement}`);
	console.log(`book list parent node: ${bookList.parentNode}`);

	console.log(`all node children: ${Array.from(bookList.childNodes)}`);
	Array.from(bookList.childNodes).forEach(function(node) {
		console.log(node);
	});
});
