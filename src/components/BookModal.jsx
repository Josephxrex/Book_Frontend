import Modal from "react-responsive-modal";
import BookItem from "./BookItem";

function BookModal({ book, isOpen, onClose }) {
  const modalStyles = {
    modal: {
      maxWidth: "80%",
      width: "auto",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal open={isOpen} onClose={onClose} styles={modalStyles} closeIconPosition="absolute top-0 right-0">
      <div className="w-full sm:w-[300px]  bg-white p-5 shadow-2xl rounded-xl">
        <BookItem book={book} />
      </div>
    </Modal>
  );
}

export default BookModal;
