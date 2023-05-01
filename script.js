let myLibrary = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        read: true
        },
        
        {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        read: true
        },
        
        {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 234,
        read: true
        },
        
        {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        pages: 310,
        read: false
        },
        
        {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        pages: 374,
        read: true
        }
                
];

// Dom objects...
let btnAddNewBook = document.querySelector('#btnAddNewBook');
let table = document.querySelector('.table');
let tbody = table.querySelector('tbody');
let form = document.querySelector('.form');
let inputTitle = form.querySelector('#title');
let inputAuthor = form.querySelector('#author');
let inputPages = form.querySelector('#pages');
//let inputReadYes = form.querySelector('#yes');
//let inputReadNo = form.querySelector('#no');
let btnSubmit = form.querySelector('#submit');
let btnCancel = form.querySelector('#cancel');

function Book(title, author, pages, read) {
    // the constructor. . .
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let addBookToLibrary = (title, author, pages, read) => {

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// this arrow fuction find and store the value of book read or not in a variable
let inputRadioRead = () => form.querySelector('input[name="read"]:checked').value;

let toggleHiddenElements = () => {
    form.classList.toggle('hidden');
    table.classList.toggle('hidden');
    btnAddNewBook.classList.toggle('hidden');
}

let clearForm = () => {
    inputTitle.value = null;
    inputAuthor.value = null;
    inputPages.value = null;
}

let createReadToggleBtnTd = (book) => {
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.textContent = 'change read status';
    btn.addEventListener('click', () => {
        book.read = !book.read;
        updateTable();
    });
    td.appendChild(btn);
    return td;
}

let createDeleteBtnTd = (index) => {
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.addEventListener('click', () => {
        myLibrary.splice(index);
        updateTable();
    });
    td.appendChild(btn);
    return td;
}

