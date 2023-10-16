import Nabvar from "./Components/NavBar/Nabvar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nabvar />
      <ItemListContainer greeting="Proximamente contenido..." />
    </div>
  );
}

export default App;
