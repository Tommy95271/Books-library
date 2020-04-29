document.addEventListener('DOMContentLoaded', function() {
	const list = document.querySelector('#book-list ul');
	console.log(list);

	//delete books in easier way
	list.addEventListener('click', (e) => {
		if (e.target.className === 'delete') {
			const li = e.target.parentElement;
			li.parentElement.removeChild(li);
		}
	});
});
