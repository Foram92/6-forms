import { useState } from "react";
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
    //here useSate([]) array is empty bcoz right now we don't have any books
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBook = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        });

        setBooks(updatedBook);
    };

    const createBook = (title) => {
        //console.log("Need to create book named: ", title);
        const updatedBook = [       //this will create new array 
        //...books means find existing books and copy them into new array (or object)
            ...books, 
            //this is new object will added into new array at the end
            {
                id: Math.round(Math.random () * 9999), 
                title
            },
        ];
        setBooks(updatedBook);
    };

    const deleteBookById = (id) => {
        //filter fun compare id come from BookShow and every book's id, if condition become true, that book will be added otherwise removed; and filter will gave us new object
        const updatedBook = books.filter((book) => {
            return book.id !== id;
    });
        setBooks(updatedBook);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate = {createBook} />
        </div>
    );
}

export default App;