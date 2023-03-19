import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import CreateBook from "./pages/CreateBook";
import SearchBooks from "./pages/SearchBooks";
import { BooksProvider } from "./context/BooksProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BooksProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/book/create" element={<CreateBook />} />
            <Route path="/book/create/:id" element={<CreateBook />} />
            <Route path="/book/search" element={<SearchBooks />} />
          </Routes>
        </BooksProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
