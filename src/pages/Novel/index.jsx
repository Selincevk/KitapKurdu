import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Novel() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books") // API'den veri alıyoruz
      .then((response) => {
        const romanKitaplari = response.data.filter(
          (book) => book.category === "Roman"
        );
        setBooks(romanKitaplari); // Roman kategorisindeki kitapları set et
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="container">
      <h2>Roman Kitapları</h2>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-4" key={book.id}>
            <div
              className={`card mb-4 shadow-sm bg-${
                index % 2 === 0 ? "	#ffeb3c" : "success"
              } text-black`}
            >
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-text">Yazar: {book.author}</p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Novel;
