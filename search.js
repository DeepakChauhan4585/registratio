document.getElementById('searchBtn').addEventListener('click', searchBooks);

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' }
];

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );

    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No books found.</p>';
    } else {
        results.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `<strong>Title:</strong> ${book.title} <br> <strong>Author:</strong> ${book.author}`;
            resultsDiv.appendChild(bookItem);
        });
    }
}
