const myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: '295', read: true},
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
}

function displayBook() {
    const container = document.querySelector(".book-container");
}