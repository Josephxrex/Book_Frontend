import { useEffect } from "react";
import useBooks from "../hooks/useBooks";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Book() {
  const { obtenerBook, book, alerta, eliminarbook } = useBooks();
  const params = useParams();

  useEffect(() => {
    obtenerBook(params.id);
  }, []);

  const { title, image, author, year, genre, series } = book || {};

  const handleClick = () => {
    if (confirm("¿Deseas eliminar este proyecto?")) {
      eliminarbook(params.id);
    }
  };

  const { msg } = alerta;
  return (
    <div className=" p-10">
      {msg && <Alerta alerta={alerta} />}
      <div className="flex flex-col lg:flex-row justify-center">
        <div className=" lg:w-1/2 p-10">
          <h1 className="text-sky-500 font-black text-5xl py-3 px-5">
            {title}
          </h1>
          <h2 className="text-gray-500 font-black text-xl  px-5">
            Genero : {genre?.name}{" "}
          </h2>
          <p className="text-gray-500 font-black text-lg py-3 px-5">
            <span className="text-sky-500 ">Autor: </span>
            {author?.name} {"  "}
          </p>
          <p className="text-gray-500 font-black text-lg py-3 px-5">
            <span className="text-sky-500 "> Nacionalidad :</span>{" "}
            {author?.nationality}
          </p>
          <p className="text-gray-500 font-black text-lg py-3 px-5">
            <span className="text-sky-500 ">Año de Publicacion: </span>
            {year} {"  "}
          </p>
          <p className="text-gray-500 font-black text-lg py-3 px-5">
            <span className="text-sky-500 "> Serie :</span> {series?.name}
          </p>

          <div className=" flex gap-3 m-8 ">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2  border rounded shadow">
              <Link
                to={`/book/create/${params.id}`}
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border rounded shadow"
              >
                Actualizar
              </Link>
            </button>
            <button
              onClick={handleClick}
              class="bg-red-600 text-white hover:bg-red-100  font-bold py-2 px-4 borderrounded shadow"
            >
              Eliminar
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 p-8 ">
          <img className="w-full lg:w-[300px]" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default Book;
