import React from "react";
import SimpleSlider from "../components/Carrussel";
import useBooks from "../hooks/useBooks";

const Home = () => {
  const { books } = useBooks();

  const libroItems = books.map((book) => (
    <div key={book._id}>
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-500 mb-4">{book.author.name}</p>
      <img src={book.image} alt={book.title} className="w-full mb-4" />
    </div>
  ));

  return (
    <>
      <div className="h-screen m-10 p-20 ">
        <h1 className="text-sky-500 font-black text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-10">
          Una librería es una de las pocas evidencias que tenemos en la
          actualidad de que la gente sigue pensando.
        </h1>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-5 md:mb-10">
          Seguir leyendo...
        </button>
      </div>

      <div>
        <SimpleSlider>{libroItems}</SimpleSlider>
      </div>
    </>
  );
};

export default Home;
