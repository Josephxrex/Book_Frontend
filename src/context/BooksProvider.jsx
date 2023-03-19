import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  //Alerta
  const [alerta, setAlerta] = useState({});
  //Extracciones de las categorias
  const [authors, setAuthors] = useState([]);
  const [seriesL, setSeries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [book, setBook] = useState([]);
  const [books, setBooks] = useState([]);
  const [allBooks, setAllbooks] = useState([]);
  const [booksFiltered, setBooksFiltered] = useState([]);

  const [booksGnres, setBooksGnres] = useState([]);
  const [booksFic, setBooksFic] = useState([]);
  const [booksAnime, setBooksAnime] = useState([]);

  const [booksHarry, setBooksHarry] = useState([]);
  const [booksDivergente, setBooksDivergente] = useState([]);
  const [booksCrepusculo, setBooksCrepusculo] = useState([]);

  const [newest, setNewest] = useState([]);
  const [filter, setFilter] = useState({
    author: "",
    genre: "",
    year: "",
  });

  //Navegacion
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerautores = async () => {
      try {
        const response = await clienteAxios("autor");
        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerautores();
  }, []);

  useEffect(() => {
    const obtenerSeries = async () => {
      try {
        const response = await clienteAxios("serie");
        setSeries(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerSeries();
  }, []);

  useEffect(() => {
    const obtenerGeneros = async () => {
      try {
        const response = await clienteAxios("genero");
        setGenres(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerGeneros();
  }, []);

  useEffect(() => {
    const obtenerTodosLibros = async () => {
      try {
        const response = await clienteAxios("libro");
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerTodosLibros();
  }, []);
  //Genero Romance
  useEffect(() => {
    const obtenerXGenero = async () => {
      try {
        const response = await clienteAxios(
          "libro/genero/6413ae0f02a94aeeabd09b7c"
        );
        setBooksGnres(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXGenero();
  }, []);

  //Genero Ficcion
  useEffect(() => {
    const obtenerXGenero2 = async () => {
      try {
        const response = await clienteAxios(
          "libro/genero/6413b7f336fb9e7572a25876"
        );
        setBooksFic(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXGenero2();
  }, []);

  //Genero Anime
  useEffect(() => {
    const obtenerXGenero3 = async () => {
      try {
        const response = await clienteAxios(
          "libro/genero/6413ae2802a94aeeabd09b7e"
        );
        setBooksAnime(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXGenero3();
  }, []);

  //Serie Harrypotter
  useEffect(() => {
    const obtenerXSerie1 = async () => {
      try {
        const response = await clienteAxios(
          "libro/serie/6413abac02a94aeeabd09b73"
        );
        setBooksHarry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXSerie1();
  }, []);

  //Serie Crepúsculo
  useEffect(() => {
    const obtenerXSerie2 = async () => {
      try {
        const response = await clienteAxios(
          "libro/serie/6413b08ce05bda52f05c942c"
        );
        setBooksCrepusculo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXSerie2();
  }, []);

  //Serie Divergente
  useEffect(() => {
    const obtenerXSerie3 = async () => {
      try {
        const response = await clienteAxios(
          "libro/serie/6413b0a1e05bda52f05c942e"
        );
        setBooksDivergente(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXSerie3();
  }, []);
  //Por año
  useEffect(() => {
    const obtenerXanios = async () => {
      try {
        const response = await clienteAxios.post("libro/newest");
        setNewest(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerXanios();
  }, []);
  const addBook = (book) => {
    setAllBooks([...allBooks, book]);
  };

  const filterBooks = (filter) => {
    const filtered = allBooks.filter((book) => book.genre === filter);
    setBooksFiltered(filtered);
  };
  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 3000);
  };

  const submitBook = async (book) => {
    console.log(book);
    if (book.id) {
      await actualizarbook(book);
    } else {
      await newBook(book);
    }
  };
  const newBook = async (book) => {
    try {
      const { data } = await clienteAxios.post("/libro", book);
      setBook(data);
      setAlerta({
        msg: "Libro Añadido Correctamente",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
        navigate("/home");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerBook = async (id) => {
    try {
      const { data } = await clienteAxios(`/libro/${id}`);
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };
  const eliminarbook = async (id) => {
    try {
      const { data } = await clienteAxios.delete(`/libro/${id}`);
      //setBook(data);
      setAlerta({
        msg: "Libro Eliminado",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
        navigate("/home");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarbook = async (book) => {
    try {
      const { data } = await clienteAxios.put(`/libro/${book.id}`, book);
      //setBook(data);
      setAlerta({
        msg: "Libro Actualizado",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
        navigate("/home");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <BooksContext.Provider
      value={{
        alerta,
        mostrarAlerta,
        authors,
        seriesL,
        genres,
        submitBook,
        book,
        books,
        booksGnres,
        booksFic,
        booksAnime,
        booksHarry,
        booksCrepusculo,
        booksDivergente,
        newest,
        obtenerBook,
        eliminarbook, allBooks, booksFiltered, addBook, filterBooks
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider };
export default BooksContext;
