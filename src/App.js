import Navbar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Proximamente contenido..." />
    </div>
  );
}

export default App;
