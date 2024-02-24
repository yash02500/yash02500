// const Book = require('../models/book');

// const bookController = {
//   // Book submission
//   submitBook: async (req, res) => {
//     console.log(req.body);
//     const bookName  = req.body.bookName;
//     const submitTime = new Date().toLocaleTimeString();
//     const returnTime = ''; // To be set upon return
//     const returnFine = 0; // To be updated based on late return

//     try {
//       const newBook = await Book.create({ bookName, submitTime, returnTime, returnFine });
//       res.status(201).json(newBook);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server Error' });
//     }
//   },

//   // Get all books
//   getAllBooks: async (req, res) => {
//     try {
//       const books = await Book.findAll();
//       res.json(books);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server Error' });
//     }
//   },

//   // Handle book return
//   returnBook: async (req, res) => {
//     const bookId = req.params.bookId;

//     try {
//       const book = await Book.findByPk(bookId);

//       if (book) {
//         book.returnTime = new Date().toLocaleTimeString();

//         // Calculate return fine (if applicable)
//         const returnTime = new Date(book.returnTime);
//         const submitTime = new Date(book.submitTime);
//         const diffInMinutes = Math.floor((returnTime - submitTime) / 60000);

//         if (diffInMinutes > 60) {
//           // for returning after 1 hour 
//           book.returnFine = 200;
//         }

//         await book.save();
//         res.json(book);
//       } else {
//         res.status(404).json({ error: 'Book not found' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server Error' });
//     }
//   },
// };

// module.exports = bookController;



const Book = require('../models/book');

// Controller actions
// exports.getAddBook = (req, res, next) => {
//   res.render('add-book', {
//     pageTitle: 'Add Book',
//     path: '/admin/add-book',
//     formsCSS: true,
//     bookCSS: true,
//     activeAddBook: true
//   });
// };

exports.postAddBook = async (req, res, next) => {
  const { bookName } = req.body;
  const submitTime = new Date().toLocaleTimeString();
  const returnTime = ''; // To be set upon return
  const returnFine = 0; // To be updated based on late return

  try {
    const newBook = await Book.create({ bookName, submitTime, returnTime, returnFine });
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.returnBook = async (req, res, next) => {
  const bookId = req.params.bookId;

  try {
    const book = await Book.findByPk(bookId);

    if (book) {
      book.returnTime = new Date().toLocaleTimeString();

      // Calculate return fine (if applicable)
      const returnTime = new Date(book.returnTime);
      const submitTime = new Date(book.submitTime);
      const diffInMinutes = Math.floor((returnTime - submitTime) / 60000);

      if (diffInMinutes > 60) {
        // for returning after 1 hour 
        book.returnFine = 200;
      }

      await book.save();
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
