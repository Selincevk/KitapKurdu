import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

function Products() {
  // kitap statei
  const [books, setBooks] = useState([]);
// URLden parametreyi alma
  const [searchParams]=useSearchParams()
  useEffect(() => {
    // parametreyi
    const params = {q: (searchParams.get("search")),
      _sort:"title",
      _order:searchParams.get("sort") === "z-a" ? "desc" : "asc"
      // Json-server kullanıyoruz bu api bize sıralama yapabilmemiz için 2 adet parametre istediğini söylüyor. birincisi hangi değere göre sıralama yapacağımız 2.ise nasıl bir sıralama yapacağımız.
    }
    api.get("/books",{params}).then((res) => setBooks(res.data));
  }, [searchParams]);
  // URLdeki parametreyre bağlı olarak Apiden veri alabilmek için arama parametresini URLye geçtik
  return (
    <div className="container my-5">
      {/* RESULTS */}
      {books.length === 0 ? (<h3 className="bg-danger p-3 rounded text-center">Kitap Bulunamadı</h3>): (<h3>{books.length} kitap bulundu</h3>)}
      {/* FİLTER */}
      <Filter />
      {/* CARDS */}
     <div className="card-container">
     {books.map((book) => (
        <Card key={book.id} book={book}  />
      ))}
     </div>
    </div>
  );
}

export default Products;
