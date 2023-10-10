const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        page: 295
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        page: 288
    },
    {
        title: "Eat That Frog",
        author: "Brian Tracy",
        page: 144
    },
    // {
    //     title: "",
    //     author: "",
    //     page: 
    // },
]
const body = document.querySelector(".body-wrapper");
let popupAddBook = document.querySelector(".add-book-popup");
const cardsContainer = document.querySelector('.cards');
const cards = cardsContainer.querySelectorAll('.card');

function createBookCard() {
    const cards = document.querySelector(".cards")
    cards.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.innerHTML = `
        <span class="card-title">${books[i].title} </span>
        <span class=" card-subtitle">by ${books[i].author} </span>
        <span class="card-pages">pages: ${books[i].page}</span>
        <div class="edit"></div> `;
        cards.appendChild(bookCard);
    }
}
function showConfetti() {
    const btnClick = document.getElementsByClassName("confetti-button");

    for (let i = 0; i < btnClick.length; i++) {
        btnClick[i].addEventListener("click", () => {
            let canvas = document.createElement("canvas");
            let container = document.getElementsByClassName("button-wrapper")[0];
            let confetti_button = confetti.create(canvas);
            canvas.width = 600;
            canvas.height = 600;
            container.appendChild(canvas);
            confetti_button().then(() => container.removeChild(canvas));
        });
    }
}
function openPopup() {
    let openIcon = document.querySelector(".add-book-btn");
    openIcon.addEventListener("click", () => {
        popupAddBook.style.display = "block";
    })
}
function closePopup() {
    let closeIcon = document.querySelector('.close-popup');
    closeIcon.addEventListener("click", () => {
        popupAddBook.style.display = "none";
        document.body.style.filter = "none";
    })
}
// let click = body.addEventListener("click", function (e) {
//     console.log(e.target)
// })
let newTitle = document.querySelector("#title")
let newAuthor = document.querySelector("#author")
let newPage = document.querySelector("#pages")
let submitBook = document.querySelector("#submitBook")

function addNewBook() {
    submitBook.addEventListener("click", function () {
        const newTitle = document.getElementById("title").value;
        const newAuthor = document.getElementById("author").value;
        const newPage = document.getElementById("pages").value;
        // console.log(newTitle)


        if (newTitle !== "" && newAuthor !== "" && newPage !== "") {
            const newBook = {
                title: newTitle,
                author: newAuthor,
                page: newPage
            };

            books.push(newBook);

            // Очищаем поля ввода
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("pages").value = "";

            //проблема здесь. ничего не обновляется
            createBookCard();

        }
    });
}



createBookCard();
showConfetti();
closePopup();
openPopup();
addNewBook();
