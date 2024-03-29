const myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: '295', read: true},
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToLibrary() {
    const book = new Book()
}

function displayBook() {
    // container for the book
    const container = document.querySelector(".book-container");

    // create necessary HTML elements for book display

    // loop through the library array and add the values to the HTML elements

    // push the book to the container
}


// Open and Close Dialog modal
const myModal = document.getElementById('modal');
const modalClose = document.querySelector('.close');

function displayModal() {
    myModal.showModal();
}

modalClose.addEventListener('click', () => myModal.close());


