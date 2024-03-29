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
    const form = document.querySelector('form');
    form.addEventListener('click', (event) => {
        event.preventDefault();

        // Store form values
        let title = document.querySelector('.title').value;
        let author = document.querySelector('.author').value;
        let pages = document.querySelector('.pages').value;
        let read = document.querySelector('.read').checked;

        const book = new Book(title, author, pages, read);

        // Push book to the library
        myLibrary.push(book);
        const myModal = document.getElementById('modal');
        myModal.close();
        console.log(myLibrary);
        // Clear text content pf input after closing modal
        form.reset();
    })
}


function displayBook() {
    // container for the book
    const container = document.querySelector(".book-container");
    
    // create necessary HTML elements for book display
    
    // loop through the library array and add the values to the HTML elements
    
    // push the book to the container
}


function displayModal() {
    // Open and Close Dialog modal
    const myModal = document.getElementById('modal');
    const openModal = document.querySelector('.openModal');
    const modalClose = document.querySelector('.close');
    openModal.addEventListener('click', () => myModal.showModal());

    modalClose.addEventListener('click', () => myModal.close());
}

addToLibrary();
displayModal();



 