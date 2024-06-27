import React from "react";
import { Book } from "../types/BookTypes";
import AddBook from "./AddBook";
import "./booktable.scss";

interface BookTableProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (bookId: number) => void;
}

const BookTable: React.FC<BookTableProps> = ({ books, onEdit, onDelete }) => {
  return (
    <table className="bookTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publication Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <AddBook
            key={book.id}
            book={book}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
