console.log('This is ES6 version of this Project');

// Add Scroll Bar into the table
let tableBody = document.getElementById('table');
tableBody.style.overflow = 'auto';
tableBody.style.height = '350px';


// Show Books in the table
function showBooks() {

    let getBooks = localStorage.getItem('books');
    let bookObj;
    if (getBooks == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(getBooks);
    }

    let addRow = "";
    bookObj.forEach(function (element, index) {
        addRow += `<tr>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
                  </tr>`;
    });
    let tableBody = document.getElementById('tableBody');
    if (bookObj.length == 0) {
        tableBody.innerHTML = "";
    }else{
        tableBody.innerHTML = addRow;
    }
}

// Delete Book from the table
function deleteBook(index) {
    let getBooks = localStorage.getItem('books');
    let bookObj;
    if (getBooks == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(getBooks);
    }
    let bookName = bookObj[index].name;
    bookObj.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookObj));
    let message = document.getElementById('message');
    let boldText = 'Deleted';
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>${boldText}: </strong> The book ${bookName} has been deleted from the library
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(() => {
        message.innerHTML = "";
    }, 5000);
    showBooks();
}

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        var d = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(d.getDate()+30);
        var dd1 = String(tomorrow.getDate()).padStart(2, '0');
        var mm1 = String(tomorrow.getMonth() + 1).padStart(2, '0');
        var yyyy1 = tomorrow.getFullYear();
        tomorrow = dd1 + '/' + mm1 + '/' + yyyy1;
        let tableBody = document.getElementById('tableBody');
    
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td>${today}</td>
                            <td>${tomorrow}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm
//let libraryForm = document.getElementById('libraryForm');
let book = document.getElementById('book').addEventListener("click", libraryFormSubmit);
//libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        console.log("done");
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
