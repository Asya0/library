const myLibrary = ["The Hobbit", "A Game of Thrones"];

function Book(title) {
    this.title = title;
    this.info = function () {
        // console.log(title)
    }
    function addBookToLibrary() {
        let btn = document.querySelector(".addBook")
        let addBook = "lalal"
        myLibrary.push(addBook);
    }
    addBookToLibrary()
    for (item of myLibrary) {
        console.log(item)
    }
}
Book()
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295");
// const gameOfThrones = new Book("A Game of Thrones", "George R. R. Martin", "694");
// theHobbit.info()
// psyMoney.info()