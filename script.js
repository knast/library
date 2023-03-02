const addBookBtn = document.querySelector('.add-book');
const bookInfo = document.querySelector('.book-info');
const closeBtn = document.querySelector('.close');


addBookBtn.addEventListener('click', () => {
    bookInfo.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    bookInfo.classList.add('hidden');
}) 


let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        
    }
}

