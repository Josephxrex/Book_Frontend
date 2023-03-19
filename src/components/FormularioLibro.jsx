import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alerta from "./Alerta";
import useBooks from "../hooks/useBooks";
//Importando los modelos

const FormularioLibro = () => {
  const {
    authors,
    seriesL,
    genres,
    alerta,
    mostrarAlerta,
    submitBook,
    book,
    obtenerBook,
  } = useBooks();
  const [id, setId] = useState(null);
  const [author, setauthorV] = useState("");
  const [series, setSerieV] = useState("");
  const [genre, setgenreV] = useState("");

  const [title, setTitle] = useState("");
  const [image, setImagen] = useState("");
  const [year, setYear] = useState();

  const params = useParams();

  useEffect(() => {
    obtenerBook(params.id);
    setId(params.id);
  }, []);

  useEffect(() => {
    if (book?._id) {
      setId(book._id);
      setTitle(book.title);
      setauthorV(book.author);
      setSerieV(book.series);
      setgenreV(book.genre);
      setImagen(book.image);
      setYear(book.year);
      return;
    }
  }, [book]);

  //console.log(authors);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([author, series, genre, title, image, year].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    } else {
      await submitBook({
        id,
        title,
        author,
        year,
        genre,
        series,
        image,
        book: params.id,
      });
    }
    setId(null);
    setauthorV("");
    setSerieV("");
    setgenreV("");
    setTitle("");
    setImagen("");
    setYear("");
  };

  const { msg } = alerta;

  return (
    
      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 md:w-1/3 rounded-lg shadow-xl"
      >
        {msg && <Alerta alerta={alerta} />}
        {/*Title*/}
        <div className="mb-5">
          <label
            htmlFor="nombreLibro"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Nombre del libro
          </label>
          <input
            type="text"
            id="nombreLibro"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Nombre del libro "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/*Author*/}
        <div className="mb-5">
          <label className="text-gray-700 uppercase font-bold text-sm">
            Autor
          </label>
          {authors ? (
            <select onChange={(e) => setauthorV(e.target.value)}>
              {authors.map((autor) => (
                <option key={autor._id} value={autor._id}>
                  {autor.name}
                </option>
              ))}
            </select>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/*Year*/}
        <div className="mb-5">
          <label
            htmlFor="anioPublic"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Año de Publicacion
          </label>
          <input
            type="number"
            id="anioPublic"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Año de publicacion  "
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        {/*Genero*/}
        <div className="mb-5">
          <label
            htmlFor="genero"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Genero literario:
          </label>
          {genres ? (
            <select onChange={(e) => setgenreV(e.target.value)}>
              {genres.map((genres) => (
                <option key={genres._id} value={genres._id}>
                  {genres.name}
                </option>
              ))}
            </select>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/*Serie*/}
        <div className="mb-5">
          <label
            htmlFor="series"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Nombre de la serie
          </label>
          {seriesL ? (
            <select onChange={(e) => setSerieV(e.target.value)}>
              {seriesL.map((serie) => (
                <option key={serie._id} value={serie._id}>
                  {serie.name}
                </option>
              ))}
            </select>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/*Image*/}
        <div className="mb-5">
          <label
            htmlFor="imagen"
            className="text-gray-700 uppercase font-bold text-sm"
          >
            Portada del Libro
          </label>
          <input
            type="text"
            id="imagen"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Portada del libro  "
            value={image}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        {/*Button*/}
        <input
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 w-full
                    p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded
                    text-sm
                    "
          value={id ? "Guardar Cambios" : "Añadir Libro"}
        />
      </form>
    
  );
};

export default FormularioLibro;
