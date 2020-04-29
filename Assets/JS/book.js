document.addEventListener('DOMContentLoaded', function() {
	const listItems = document.querySelectorAll('#book-list ul li .delete');
	console.log(listItems);
	Array.from(listItems).forEach(function(item) {
		item.addEventListener('click', (e) => {
			const li = e.target.parentElement;
			console.log('child element to remove', li);
			console.log('parent element to remove child from', li.parentElement);
			li.parentElement.removeChild(li);
		});
	});
});
