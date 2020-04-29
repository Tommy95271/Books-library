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

	const forms = document.forms;

	const addForm = forms['add-book'];
	addForm.addEventListener('submit', function(e) {
		e.preventDefault();
		const value = addForm.querySelector('input[type="text"]').value;
		console.log(value);
		const li = document.createElement('li');
		const bookName = document.createElement('span');
		const deleteBtn = document.createElement('span');

		bookName.textContent = value;
		deleteBtn.textContent = 'delete';

		bookName.classList.add('name');
		deleteBtn.classList.add('delete');

		li.appendChild(bookName);
		li.appendChild(deleteBtn);
		list.append(li);
	});
});
