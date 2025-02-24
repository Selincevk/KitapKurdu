import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home/"
import Category from "./pages/Category"
import Story from "./pages/Story"
import Novel from "./pages/Novel"
import Details from "./pages/Details"
import Products from "./pages/Products"
import Header from "./components/Header"
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ürünler" element={<Products />} />
      <Route path="/kategori" element={<Category />}>
        <Route path="hikaye" element={<Story />} />
        <Route path="roman" element={<Novel />} />
        <Route />
      </Route>
      <Route path="/detay/:id" element={<Details />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
