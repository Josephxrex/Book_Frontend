import React, { useState } from "react";
import Slider from "react-slick";
import BookModal from "./BookModal";
import BookItem from "./BookItem";
import useBooks from "../hooks/useBooks";

export default function SimpleSlider() {
  const {
    books,
    newest,
    booksGnres,
    booksFic,
    booksAnime,
    booksHarry,
    booksDivergente,
    booksCrepusculo,
  } = useBooks();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openBookModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const closeBookModal = () => {
    setSelectedBook(null);
    setIsOpen(false);
  };
  // Todos los libros
  const bookItems = books.map((book) => (
    <div key={book._id} onClick={() => openBookModal(book)}>
      <BookItem book={book} />
    </div>
  ));
  // Todos por año
  const bookyear = newest.map((newest) => (
    <div key={newest._id} onClick={() => openBookModal(newest)}>
      <BookItem book={newest} />
    </div>
  ));
  // Todos por Romance
  const bookRom = booksGnres.map((booksGnres) => (
    <div key={booksGnres._id} onClick={() => openBookModal(booksGnres)}>
      <BookItem book={booksGnres} />
    </div>
  ));
  // Todos por Ficción
  const bookFic = booksFic.map((booksFic) => (
    <div key={booksFic._id} onClick={() => openBookModal(booksFic)}>
      <BookItem book={booksFic} />
    </div>
  ));
  // Todos por Anime
  const bookAni = booksAnime.map((bookAni) => (
    <div key={bookAni._id} onClick={() => openBookModal(bookAni)}>
      <BookItem book={bookAni} />
    </div>
  ));
  // Todos por Harry
  const bookHarry = booksHarry.map((booksHarry) => (
    <div key={booksHarry._id} onClick={() => openBookModal(booksHarry)}>
      <BookItem book={booksHarry} />
    </div>
  ));
  // Todos por Divergente
  const bookDiver = booksDivergente.map((booksDivergente) => (
    <div
      key={booksDivergente._id}
      onClick={() => openBookModal(booksDivergente)}
    >
      <BookItem book={booksDivergente} />
    </div>
  ));
  // Todos por Crepúsculo
  const bookCrep = booksCrepusculo.map((booksCrepusculo) => (
    <div
      key={booksCrepusculo._id}
      onClick={() => openBookModal(booksCrepusculo)}
    >
      <BookItem book={booksCrepusculo} />
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // Tamaño máximo de pantalla para móviles
        settings: {
          slidesToShow: 1, // Mostrar solo 1 libro en cada diapositiva
          slidesToScroll: 1, // Desplazar solo 1 libro a la vez
          initialSlide: 0, // Iniciar en la primera diapositiva
        },
      },
      {
        breakpoint: 768, // Tamaño máximo de pantalla para tablets
        settings: {
          slidesToShow: 2, // Mostrar 2 libros en cada diapositiva
          slidesToScroll: 1, // Desplazar solo 1 libro a la vez
          initialSlide: 0, // Iniciar en la primera diapositiva
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por <span className="text-red-700">mas reciente</span>
      </h1>
      <Slider {...settings}>{bookyear}</Slider>
      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por genero
        <span className="text-red-700"> Romance Juvenil</span>
      </h1>
      <Slider {...settings}>{bookRom}</Slider>
      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por genero
        <span className="text-red-700"> Ficción</span>
      </h1>
      <Slider {...settings}>{bookFic}</Slider>
      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por genero
        <span className="text-red-700"> Anime</span>
      </h1>
      <Slider {...settings}>{bookAni}</Slider>
      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por serie <span className="text-red-700">Harry Potter</span>
      </h1>
      <Slider {...settings}>{bookHarry}</Slider>

      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por serie :<span className="text-red-700">Crepúsculo </span>
      </h1>
      <Slider {...settings}>{bookCrep}</Slider>

      <h1 className="text-sky-500 font-black  text-6xl capitalize p-5 m-20 ">
        Libros por serie :<span className="text-red-700">Divergente </span>
      </h1>
      <Slider className="p-3" {...settings}>
        {bookDiver}
      </Slider>
      {selectedBook && (
        <div>
          <BookModal
            book={selectedBook}
            isOpen={isOpen}
            onClose={closeBookModal}
          />
        </div>
      )}
    </>
  );
}
