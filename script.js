const myLibrary = [
];

function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author
    this.Pages = Pages;
    this.Read = Read;
}

let stat = 0;
function createBook() {
    // container for the book
    const container = document.querySelector(".book-container");
    
    // store the keys in an array
    const keys = Object.keys(myLibrary[0]);

        
    // store the values in an array
    const values = Object.values(myLibrary[myLibrary.length - 1]);
    
    // create the container to contain the text contents of the book
    const bookInformation = document.createElement('div');
    bookInformation.classList.add('book');
    bookInformation.setAttribute('data-book-index', `${stat}`)
    container.appendChild(bookInformation);

    const outerSectionDiv = document.createElement('div');
    bookInformation.appendChild(outerSectionDiv);

    for (let i = 0; i < 4; i++) {
        const sectionDiv = document.createElement('div');
        
        const head = document.createElement('h4');
        head.textContent = keys[i];
        const info = document.createElement('p');
        info.textContent = values[i];

        sectionDiv.appendChild(head);
        sectionDiv.appendChild(info);
        outerSectionDiv.appendChild(sectionDiv)
    }

    // create the icons and buttons 
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    const svgTitle = document.createElement('title');
    svgTitle.textContent = "book";
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    
    iconPath.setAttribute('d', 'M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z');

    iconSvg.appendChild(svgTitle);
    iconSvg.appendChild(iconPath);
    iconsDiv.appendChild(iconSvg);
    bookInformation.appendChild(iconsDiv);
    
    // read and delete buttons
    const buttonContainer = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    button1.classList.add('read');
    button1.setAttribute('data-read', `${stat}`);
    button2.classList.add('delete');
    button2.setAttribute('data-book-delete', `${stat}`);
    stat++;
    button1.textContent = 'Read Status';
    button2.textContent = 'Delete';
    
    buttonContainer.appendChild(button1)
    buttonContainer.appendChild(button2);
    
    iconsDiv.appendChild(buttonContainer);
}



function displayBook() {
    return myLibrary[myLibrary.length - 1];
}

function addToLibrary() {
    const form = document.querySelector('.addBook');
    const submit = document.querySelector('.submit');
    const myModal = document.getElementById('modal');
    submit.addEventListener('click', (event) => {
        event.preventDefault();

        // Store form values
        let title = document.querySelector('.title').value;
        let author = document.querySelector('.author').value;
        let pages = document.querySelector('.pages').value;
        let read = document.querySelector('.isread').checked;
        
        read ? read = "Yes" : read = "No";

        const book = new Book(title, author, pages, read);

        
        // Close Modal after submitting and Clear text content of input after closing modal
        if ((title !== '') && (author !== '') && (pages !== '')) {
            // Push book to the library
            myLibrary.push(book);
            createBook();
            displayBook();
            myModal.close();
            form.reset();
            removeBook();
            readStatus();
        }
    })
}

function displayModal() {
    // Open and Close Dialog modal
    const myModal = document.getElementById('modal');
    const openModal = document.querySelector('.openModal');

    const modalClose = document.querySelector('.close');
    const form = document.querySelector('.addBook');

    openModal.addEventListener('click', () => myModal.showModal());
    modalClose.addEventListener('click', () => {
        myModal.close();
        form.reset();
    });

}

function removeBook() {
    const deleteButtons = document.querySelectorAll('[data-book-delete]');
    const books = document.querySelectorAll('[data-book-index]');
    const delBooksArr = [...deleteButtons];
    const booksArr = [...books];
    for (let i = 0; i < booksArr.length; i++) {
        delBooksArr[i].addEventListener('click', () => {
            myLibrary.splice(i, 1);
            booksArr[i].remove();
        })
    }
}

function readStatus() {
    const radio = document.getElementsByName('isRead');
    console.log(radio);
    const readModal = document.getElementById('isReadModal');

    // Apply an event listener to each book instance's read status modal
    const readStatusButton = document.querySelectorAll('[data-read]');
    
    [...readStatusButton].forEach(button => {
        button.addEventListener('click', () => readModal.showModal());
    })

    // Apply an event listener to close the modal
    const closeButton = document.querySelector('.closeRead');
    closeButton.addEventListener('click', () => readModal.close());
}

function main() {
    displayModal();
    addToLibrary();  
}

main();