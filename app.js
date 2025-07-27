let books = [];

fetch('books.json')
  .then(res => res.json())
  .then(data => {
    books = data;
    displayGenres();
    displayBooks();
  });

function displayGenres() {
  const genres = [...new Set(books.map(book => book.genre))];
  const nav = document.getElementById('genre-buttons');
  genres.forEach(genre => {
    const btn = document.createElement('button');
    btn.textContent = genre;
    btn.onclick = () => displayBooks(genre);
    nav.appendChild(btn);
  });
}

function displayBooks(filterGenre = null) {
  const container = document.getElementById('book-list');
  container.innerHTML = '';

  const filtered = filterGenre ? books.filter(b => b.genre === filterGenre) : books;

  filtered.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
      <span class="book-icon" title="${book.title}">📘</span>
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Rating:</strong> ${book.rating}/5</p>
      <p>${book.review}</p>
    `;

    container.appendChild(card);
  });
}
