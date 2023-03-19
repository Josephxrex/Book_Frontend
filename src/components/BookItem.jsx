import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <div>
      <div className="flex justify-center">
        <div key={book._id}>
          <img
            className="w-full md:w-[250px] h-[400px] object-cover"
            src={book.image}
            alt={book.title}
          />
          <div className="flex flex-col md:flex-row justify-between items-center mt-2">
            <div className="md:mr-4">
              <h2 className="font-black capitalize text-xl text-sky-500">
                {book.title}
              </h2>
              <p>{book.author.name}</p>
              <p className="font-black capitalize text-xl text-gray-400 rounded-lg">
                {book.year}
              </p>
            </div>
            <button className="font-black capitalize text-xl p-2">
              <Link to={`/book/${book._id}`}>+Mas info</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
