
// document.addEventListener('DOMContentLoaded', function () {
//   const bookForm = document.getElementById('bookForm');
//   const bookList = document.getElementById('bookList');

//   function addBook() {
//     const bookName = document.getElementById('bookName').value;

//     if (bookName.trim() === '') {
//       alert('Please enter a book name.');
//       return;
//     }

//     const submitTime = new Date().toLocaleTimeString();
//     const returnTime = null;
//     const returnFine = 0;

//     const bookItem = document.createElement('div');
//     bookItem.classList.add('book-item');
//     bookItem.innerHTML = `
//       <p><strong>Book Name:</strong> ${bookName}</p>
//       <p><strong>Submit Time:</strong> ${submitTime}</p>
//       <p><strong>Return Time:</strong> ${returnTime || 'Not returned'}</p>
//       <p><strong>Return Fine:</strong> ${returnFine}</p>
//       <button onclick="returnBook()">Return Book</button>
//     `;

//     bookList.appendChild(bookItem);

//     document.getElementById('bookName').value = '';
//   }

//   window.returnBook = function () {
//     const returnTime = new Date().toLocaleTimeString();
//     const returnFine = calculateReturnFine(); 
//     const bookItem = document.querySelector('.book-item');
//     bookItem.querySelector('p:nth-child(3)').textContent = `Return Time: ${returnTime}`;
//     bookItem.querySelector('p:nth-child(4)').textContent = `Return Fine: ${returnFine}`;
//     alert('Book returned!');
//   };

//   function calculateReturnFine(submitTime) {
//     const finePerHour = 10; 
//     const submissionTimestamp = new Date(submitTime).getTime();
//     const returnTimestamp = new Date().getTime();

//     const timeDifferenceInHours = (returnTimestamp - submissionTimestamp) / (1000 * 60 * 60);
//     const returnFine = Math.max(0, Math.floor(timeDifferenceInHours) * finePerHour);

//     return returnFine;
//   }
  

//   bookForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     addBook();
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded');

  const bookForm = document.getElementById('bookForm');
  const bookList = document.getElementById('bookList');

  function addBook(bookId, bookName) {
    console.log('Adding book:', bookName);

    const submitTime = new Date().toLocaleTimeString();
    const returnTime = null;
    const returnFine = 0;

    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.dataset.bookId = bookId; // Set the book ID as a data attribute
    bookItem.innerHTML = `
      <p><strong>Book Name:</strong> ${bookName}</p>
      <p><strong>Submit Time:</strong> ${submitTime}</p>
      <p><strong>Return Time:</strong> ${returnTime || 'Not returned'}</p>
      <p><strong>Return Fine:</strong> ${returnFine}</p>
      <button onclick="returnBook(${bookId})">Return Book</button>
    `;

    bookList.appendChild(bookItem);
  }

  window.returnBook = function (bookId) {
    const returnTime = new Date().toLocaleTimeString();
    const returnFine = calculateReturnFine(); 
    const bookItem = document.querySelector(`.book-item[data-book-id="${bookId}"]`);
    bookItem.querySelector('p:nth-child(3)').textContent = `Return Time: ${returnTime}`;
    bookItem.querySelector('p:nth-child(4)').textContent = `Return Fine: ${returnFine}`;
    alert('Book returned!');
  };

  function calculateReturnFine(submitTime) {
    const finePerHour = 10; 
    const submissionTimestamp = new Date(submitTime).getTime();
    const returnTimestamp = new Date().getTime();

    const timeDifferenceInHours = (returnTimestamp - submissionTimestamp) / (1000 * 60 * 60);
    const returnFine = Math.max(0, Math.floor(timeDifferenceInHours) * finePerHour);

    return returnFine;
  }

  // Event listener for form submission
  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted');

    const bookName = document.getElementById('bookName').value;
    // Simulate getting book ID from the server (replace with actual logic)
    const bookId = Math.floor(Math.random() * 1000);
    addBook(bookId, bookName);
    document.getElementById('bookName').value = '';
  });
});

