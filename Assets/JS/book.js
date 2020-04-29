document.addEventListener('DOMContentLoaded', function() {
	const list = document.querySelector('#book-list ul');
	console.log(list);

	// delete books in easier way
	list.addEventListener('click', (e) => {
		// if the target (span) you click has class 'delete'
		if (e.target.className === 'delete') {
			// get the span's parent which is li
			const li = e.target.parentElement;
			// get li's parent which is ul and delete the whole li
			li.parentElement.removeChild(li);
		}
	});
});
