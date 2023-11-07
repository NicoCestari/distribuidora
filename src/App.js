import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import Navbar from "./pages/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="categoty/:id" element={ItemListContainer} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
