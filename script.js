let myLibrary = [];

// Dom objects...
let btnAddNewBook = document.querySelector('#btnAddNewBook');
let table = document.querySelector('table');
let form = document.querySelector('.form');
let inputTitle = form.querySelector('#title');
let inputAuthor = form.querySelector('#author');
let inputPages = form.querySelector('#pages');
let inputReadYes = form.querySelector('#yes');
let inputReadNo = form.querySelector('#no');

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