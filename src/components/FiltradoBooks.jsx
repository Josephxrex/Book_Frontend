import { useState } from "react";
import BookItem from "./BookItem";
import useBooks from "../hooks/useBooks";
import Slider from "react-slick";

function BookFilter() {
  const [authorFilter, setAuthorFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const { books } = useBooks();

  const handleAuthorFilterChange = (event) => {
    setAuthorFilter(event.target.value);
  };

  const handleGenreFilterChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  const filterBooks = () => {
    let filteredBooks = books;

    if (authorFilter) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.author.name.toLowerCase().indexOf(authorFilter.toLowerCase()) !==
          -1
      );
    }

    if (genreFilter) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.genre.name.toLowerCase().indexOf(genreFilter.toLowerCase()) !==
          -1
      );
    }

    if (yearFilter) {
      filteredBooks = filteredBooks.filter(
        (book) => book.year.toString().indexOf(yearFilter) !== -1
      );
    }

    return filteredBooks;
  };

  return (
    <div>
      <div class="flex flex-col sm:flex-row justify-center bg-sky-500 p-10 mx-4 md:mx-20 rounded-xl shadow-xl">
        <div class="mb-8 sm:mb-0 sm:mr-8">
          <h2 class="text-white font-black text-xl p-3">Filtrado por Autor:</h2>
          <div class="flex items-center">
            <input
              class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              placeholder="Autor"
              type="text"
              value={authorFilter}
              onChange={handleAuthorFilterChange}
            />
            <button
              class="p-2 font-black text-xl text-red-600"
              onClick={() => setAuthorFilter("")}
            >
              Reset
            </button>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 sm:mr-8">
          <h2 class="text-white font-black text-xl p-3">
            Filtrado por Genero:
          </h2>
          <div class="flex items-center">
            <input
              class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              placeholder="Genero"
              type="text"
              value={genreFilter}
              onChange={handleGenreFilterChange}
            />
            <button
              class="p-2 font-black text-xl text-red-600"
              onClick={() => setGenreFilter("")}
            >
              Reset
            </button>
          </div>
        </div>
        <div>
          <h2 class="text-white font-black text-xl p-3">Filtrado por año:</h2>
          <div class="flex items-center">
            <input
              class="border-2 w-full p-2 placeholder-gray-400 rounded-md"
              placeholder="Año"
              type="text"
              value={yearFilter}
              onChange={handleYearFilterChange}
            />
            <button
              class="p-2 font-black text-xl text-red-600"
              onClick={() => setYearFilter("")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-4 md:gap-20 m-4 md:m-10 justify-center p-4 md:p-10 overflow-x-scroll">
        {filterBooks().map((book) => (
          <BookItem key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookFilter;
