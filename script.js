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

let addBookToLibrary = () => {

    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let read = inputRadioRead.value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// this arrow fuction find and store the value of book read or not in a variable
let inputRadioRead = () => form.querySelector('input[name="read"]:checked').value;

let populateStorage = () => {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

let getStorage = () => {
    myLibrary = JSON.parse(localStorage.getItem('library'));
}

let toggleHiddenElements = () => {
    form.classList.toggle('hidden');
    table.classList.toggle('hidden');
    btnAddNewBook.classList.toggle('hidden');
}

let clearForm = () => {
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
}

let createReadToggleBtnTd = (book, readStatus) => {
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.textContent = readStatus;
    btn.addEventListener('click', () => {
        book.read = !book.read;
        updateTable();
    });
    td.appendChild(btn);
    return td;
}

let removeFromLibrary = (index) => {
    myLibrary.splice(index, 1);
    btnSubmit.removeEventListener('click', createDeleteBtnTd);
    updateTable();
}

let createDeleteBtnTd = (index) => {
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        updateTable();
    });
    td.appendChild(btn);
    return td;
}

let updateTable = () => {
    tbody.textContent = '';

    myLibrary.forEach((book, index) => {
        let readStatus;
        let tr = document.createElement('tr');
        Object.keys(book).forEach(prop => {
            let td = document.createElement('td');
            td.textContent = book[prop];
            if (prop == 'read') readStatus = book[prop] ? 'Read' : 'Not-yet';
            if(prop != 'read') tr.appendChild(td);
        });
        tr.appendChild(createReadToggleBtnTd(book, readStatus));
        tr.appendChild(createDeleteBtnTd(index));
        tbody.append(tr);
    });
    populateStorage();
}

document.addEventListener('DOMContentLoaded', () => {
    btnAddNewBook.addEventListener('click', toggleHiddenElements);

    btnSubmit.addEventListener('click', () => {
        addBookToLibrary();
        updateTable();
        toggleHiddenElements();
        clearForm();
    });

    btnCancel.addEventListener('click', () => {
        toggleHiddenElements();
        clearForm();
    });
    
    
    
    if(!localStorage.getItem('library')) {
        populateStorage();
    } else {
        getStorage();
    }
    updateTable();
});

