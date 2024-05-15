const myLibrary = [
];

class Book {
    constructor(Title, Author, Pages, Read) {
        this.Title = Title;
        this.Author = Author
        this.Pages = Pages;
        this.Read = Read;
    }
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

    for (let i = 0; i < 3; i++) {
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
    
    if (myLibrary[stat].Read === "Yes") {
        button1.classList.add('read');
        button1.textContent = "Read";
        readStatus(button1);
    } else {
        button1.classList.add('not-read');
        button1.textContent = "Not Read"
        readStatus(button1);
    }
    
    
    
    button2.classList.add('delete');
    button2.setAttribute('data-book-delete', `${stat}`);
    stat++;
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
    const myModal = document.getElementById('modal');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Store form values
        let title = document.querySelector('.title').value;
        let author = document.querySelector('.author').value;
        let pages = document.querySelector('.pages').value;
        let read = document.querySelector('.isread').checked;
        
        read ? read = "Yes" : read = "No"; 
        const book = new Book(title, author, pages, read);
        
        // Close Modal after submitting and clear text content of input after closing modal
        if ((title !== '') && (author !== '') && (pages !== '')) {
            // Push book to the library
            myLibrary.push(book);
            createBook();
            displayBook();
            myModal.close();
            form.reset();
        }
        removeBook();
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
            // myLibrary.splice(i, 1);
            booksArr[i].remove();
        })
    }
}

function readStatus(button) {
    button.addEventListener('click', () => {
        if (button.classList.contains("read")) {
            button.classList.remove('read');
            button.classList.add('not-read');
            button.textContent = "Not Read"
        } else {
            button.classList.remove('not-read');
            button.classList.add('read');
            button.textContent = "Read";
        }
    })
}


function darkLightMode() {
    const rootElement = document.documentElement;
    rootElement.classList.add('light');
    const swithButton = document.querySelector('.lightbulb');
    swithButton.addEventListener('click', () => {
        if (rootElement.classList.contains('light')) {
            rootElement.classList.remove('light');
            rootElement.classList.add('dark');
            
        } else {
            rootElement.classList.remove('dark');
            rootElement.classList.add('light');
        }
    })
}

function main() {
    displayModal();
    addToLibrary();  
    darkLightMode();
}

main();