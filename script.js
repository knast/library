const addBookBtn = document.querySelector('.add-book');
const bookInfo = document.querySelector('.book-info');
const closeBtn = document.querySelector('.close');
const library = document.querySelector('.library');

const addToLibraryBtn = document.querySelector('.add-to-library');

addBookBtn.addEventListener('click', () => {
    bookInfo.classList.remove('hidden');
    
    
})

closeBtn.addEventListener('click', () => {
    bookInfo.classList.add('hidden');
    
}) 






let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let i = 0;

function addBookToLibrary() {
    const card = document.createElement('div');
    card.classList.add('card');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    readBtn.setAttribute('id', 'read');
    bookTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    readBtn.textContent = 'Is it read already?';
    removeBtn.textContent = 'Remove from the library';
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(readBtn);
    card.appendChild(removeBtn);
    library.appendChild(card);

    readBtn.addEventListener('click', () => {
        if(!readBtn.classList.contains('read')) {
            readBtn.classList.add('read');
            readBtn.style.backgroundColor = 'green';
            readBtn.textContent = 'Read';
        } else if(readBtn.classList.contains('read')) {
            readBtn.classList.remove('read');
            readBtn.style.backgroundColor = 'red';
            readBtn.textContent = 'Not read';
        }
    })

removeBtn.addEventListener('click', () => {
    library.removeChild(card);
})

}


addToLibraryBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const title = document.getElementById('book-title').value;  
    const author = document.getElementById('book-author').value;
    const pages = Number(document.getElementById('book-pages').value);
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    addBookToLibrary();
    i++;
    
})

