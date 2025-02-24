import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS'i ekleyin

function Story() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books") // API'den veri alıyoruz
      .then((response) => {
        const romanKitaplari = response.data.filter(
          (book) => book.category === "Hikaye"
        );
        setBooks(romanKitaplari); // Hikaye kategorisindeki kitapları set et
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="container">
      <h2>Hikaye Kitapları</h2>
      <div className="row">
        {" "}
        {/* Bootstrap satırını ekleyin */}
        {books.map((book, index) => (
          <div className="col-md-4" key={book.id}>
            {" "}
            {/* Her kitap için bir sütun oluşturun */}
            <div
              className={`card mb-4 shadow-sm bg-${
                index % 2 === 0 ? "" : "primary"
              } text-black`}
            >
              {" "}
              {/* Renkli kart bileşeni */}
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

export default Story;
