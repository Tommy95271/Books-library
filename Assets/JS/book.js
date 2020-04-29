document.addEventListener('DOMContentLoaded', function() {
	const list = document.querySelector('#book-list ul');
	const forms = document.forms;

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

	// add books
	const addForm = forms['add-book'];
	addForm.addEventListener('submit', function(e) {
		e.preventDefault();

		// create elements
		const value = addForm.querySelector('input[type="text"]').value;
		const li = document.createElement('li');
		const bookName = document.createElement('span');
		const deleteBtn = document.createElement('span');

		// add text content
		bookName.textContent = value;
		deleteBtn.textContent = 'delete';

		// add classes
		bookName.classList.add('name');
		deleteBtn.classList.add('delete');

		// append to DOM
		li.appendChild(bookName);
		li.appendChild(deleteBtn);
		list.append(li);
	});

	// hide books
	const hideBox = document.querySelector('#hide');
	hideBox.addEventListener('change', function(e) {
		if (hideBox.checked) {
			list.style.display = 'none';
			// list.classList.add('hide');
		} else {
			list.style.display = 'initial';
		}
	});

	// filter books
	const searchBar = forms['search-books'].querySelector('input');
	searchBar.addEventListener('keyup', function(e) {
		const term = e.target.value.toLowerCase();
		const books = document.querySelectorAll('#book-list li');
		Array.from(books).forEach(function(book) {
			const title = book.firstElementChild.textContent;
			if (title.toLowerCase().indexOf(term) !== -1) {
				book.style.display = 'flex';
			} else {
				book.style.display = 'none';
			}
		});
	});
});
