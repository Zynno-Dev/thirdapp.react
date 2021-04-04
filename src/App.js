import './App.css';
import './Components/Cart/Cart'
import Cart from './Components/Cart/Cart';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
            <li><a href="">menu 1</a></li>
            <li><a href="">menu 2</a></li>
            <li><a href="">menu 3</a></li>
            <li><a href="">menu 4</a></li>
            <li><a href=""><Cart/></a></li>
        </ul>
      </nav>
      <div>
        <ItemListContainer greeting="hola"/>
        <ItemListContainer greeting="como"/>
        <ItemListContainer greeting="estas?"/>
      </div>
    </div>
  );
}

export default App;
