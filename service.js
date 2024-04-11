const books = [
  {
    title: "The Idiot",
    author: "Fyodor Dostoyevsky ",
    price: "580",
    image: "Imagelist/the_idiot.jpg",
  },
  {
    title: "Atomic Habit",
    author: "James Clear",
    price: "420",
    image: "Imagelist/atomic_habit.jpg",
  },
  {
    title: "A Man Called OVE",
    author: "Fredrik Backman ",
    price: "650",
    image: "Imagelist/a_man_called_ove.jpg",
  },
  {
    title: "India That is Bharat",
    author: "J Sai Deepak",
    price: "720",
    image: "Imagelist/bharat.jpg",
  },
  {
    title: "The Mussoorie Murders",
    author: "Divyaroop Bhatnagar",
    price: "480",
    image: "Imagelist/mussoorie.jpg",
  },
  {
    title: "Gentleman in Moscow",
    author: "Amor Towles",
    price: "850",
    image: "Imagelist/gentelman.jpg",
  },
  {
    title: "Courage To Be Disliked",
    author: "Ichiro Kishimi and Fumitake Koga",
    price: "590",
    image: "Imagelist/courage.jpg",
  },
  {
    title: "Man's Search For Meaning",
    author: " Victor E. Frankl",
    price: "790",
    image: "Imagelist/meaning.jpg",
  },
  {
    title: "The Fallen Angel",
    author: "Daniel Silva ",
    price: "450",
    image: "Imagelist/fallen.jpg",
  },
  {
    title: "Red Queen",
    author: " Victoria Aveyard",
    price: "620",
    image: "Imagelist/queen.jpg",
  },
  {
    title: "To Kill a Kingdom",
    author: "Alexandra Christo",
    price: "500",
    image: "Imagelist/kill_a_kingdom.jpg",
  },
  {
    title: "Origin",
    author: "Alexandra Christo",
    price: "710",
    image: "Imagelist/origin.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho ",
    price: "490",
    image: "Imagelist/alchemist.jpg",
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    price: "530",
    image: "Imagelist/don_quixote.jpg",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoyevsky",
    price: "610",
    image: "Imagelist/the_brothers.jpg",
  },
  {
    title: "The Arthashastra",
    author: "Kautiliya",
    price: "750",
    image: "Imagelist/Kautiliya.jpg",
  },
  {
    title: "Metamorphosis",
    author: "Franz Kafka",
    price: "470",
    image: "Imagelist/metamorphosis.jpg",
  },
  {
    title: "Born a Crime",
    author: "Trevor Noah",
    price: "790",
    image: "Imagelist/born_a_crime.jpg",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    price: "450",
    image: "Imagelist/Educated.jpg",
  },
  {
    title: "The Power of Habit: Why We Do What We Do in Life and Business",
    author: "Charles Duhigg",
    price: "620",
    image: "Imagelist/the_power_of_habit.jpg",
  },
  {
    title: "The Subtle Art of Not Giving a Fuck",
    author: "Mark Manson",
    price: "500",
    image: "Imagelist/the_subtle_art.jpg",
  },
];

// Function to create book items and append them
function renderBooks() {
  const catalog = document.getElementById("book-catalog");
  catalog.innerHTML = ""; // Clear existing content to avoid duplicates

  books.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    // Unique IDs for button and wishlist
    const buyButtonId = `buy-button-${index}-${book.title.replace(/\s/g, "-")}`;
    const heartButtonId = `heart-button-${index}-${book.title.replace(
      /\s/g,
      "-"
    )}`;

    const bookContent = `
            <img src = "${book.image}" alt = "${book.title}" class = "book-image">
            <button id = "${buyButtonId}" class = "buy-button" onclick = "showPopup('${book.title}','${book.author}','${book.price}')">Buy</button>
            <button id = "${heartButtonId}" class = "heart-button">
                <img src = "heart.jpg" alt = "Add to Wishlist">
            </button>
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
        `;

    bookItem.innerHTML = bookContent;
    catalog.appendChild(bookItem);
  });
}

function showPopup(bookTitle, bookAuthor, bookPrice) {
  const popupContent = `
    <p>Do you want to buy this book ${bookTitle}?</p>
    <p>From ${bookAuthor}</p>
    <p>At ${bookPrice}</p>
    <button class = "confirm-button">Confirm</button>
    <button class = "cancel-button">Cancel</button>
  `;

  const popup = document.getElementById("popup");
  const popupContentElement = document.getElementById("popup-content");
  popupContentElement.innerHTML = popupContent;

  popup.style.display = "block";

  document.querySelector(".confirm-button").addEventListener("click", () => {
    alert(`The book ${bookTitle} successfully bought!`);
    popup.style.display = "none";
  });

  document.querySelector(".cancel-button").addEventListener("click", () => {
    popup.style.display = "none";
  });
}

// Function to render books when the page loads
document.addEventListener("DOMContentLoaded", renderBooks);

// for removing the menu when scrolled
let prevScrollPos = window.scrollY; // Initial scroll position

window.addEventListener("scroll", function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector(".menu").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-80px";
    document.querySelector(".menu").style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
});

// Get the current month
const currentMonth = new Date()
  .toLocaleString("default", { month: "long" })
  .toLowerCase();

// Arrays to store image filenames for each month
const imageFilenames = {
  january: ["slideshow/book1.jpg"],
  february: ["slideshow/book2.jpg"],
  march: ["slideshow/book3.jpg"],
  april: ["slideshow/book4.jpg"],
  may: ["slideshow/book5.jpg"],
  june: ["slideshow/book6.jpg"],
  july: ["slideshow/book9.jpg"],
  august: ["slideshow/book7.jpg"],
  september: ["slideshow/book8.jpg"],
  october: ["slideshow/book10.jpg"],
  november: ["slideshow/book11.jpg"],
  december: ["slideshow/book12.jpg"],
};

// Update the displayed month
document.getElementById("currentMonth").textContent = currentMonth;

// Get the appropriate image filenames for the current month
const currentImages = imageFilenames[currentMonth];

// Display a slideshow of images
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slidefade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].querySelector("img").src = `slideshow/${
    currentImages[slideIndex - 1]
  }`; // Update image source
  setTimeout(showSlides, 6000);
}
