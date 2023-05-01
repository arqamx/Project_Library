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

function addBookToLibrary() {
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Pages: ");
    let read = prompt("Read: ");

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}