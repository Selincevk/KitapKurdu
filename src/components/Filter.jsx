import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // sayfa yenilemesini engelle
    e.preventDefault();
    // input içerisindeki değer eriş
    const text = e.target[0].value;
    //URL'e geçilecek parametreleri ayarla
    searchParams.set("search", text);

    // URL'e parametre geç
    setSearchParams(searchParams);
  };
  //   selectdan bir değer seçildiğinde çalışacak fonksiyon
  const handleChange = (e) => {
    // select alanındaki değer eriş
    const value = e.target.value;
    // bu değeri parametre olaraak kullan
    searchParams.set("sort", value);
    // URLe parametre olarak geç
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mt-4">
        {/* SELECT */}
        <select
          onChange={handleChange}
          className="form-select w-25"
          defaultValue="sırala"
        >
          <option disabled>Sırala</option>
          <option defaultValue="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        {/* FORM */}
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Kitap İsmi Giriniz..."
          />
          <button className="btn btn-primary px-4">Ara</button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
