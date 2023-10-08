const myLibrary = ["The Hobbit", "A Game of Thrones"];

function Book(title) {
    this.title = title;
    this.info = function () {
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
Book();
let btnClick = document.getElementsByClassName("confetti-button");
const cardsContainer = document.querySelector('.cards');
const cards = cardsContainer.querySelectorAll('.card');
for (let i = 0; i < btnClick.length; i++) {
    btnClick[i].addEventListener("click", () => {
        let canvas = document.createElement("canvas");
        let container = document.getElementsByClassName("button-wrapper")[0];
        canvas.width = 600;
        canvas.height = 600;
        container.appendChild(canvas);

        let confetti_button = confetti.create(canvas);
        confetti_button().then(() => container.removeChild(canvas));
    });
}
function closePopup() {
    let addBook = document.querySelector(".add-book-popup");
    let closeIcon = document.querySelector('.close-popup');
    closeIcon.addEventListener("click", () => {
        addBook.style.display = "none";
    })
}
closePopup()

