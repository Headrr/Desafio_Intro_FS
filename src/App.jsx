import Header from "./components/Header/Header.component";
import Pokemons from "./components/Pokemons/Pokemons.component";

function App() {
  return (
    <div>
      <Header/>
      <h3 style={{ textAlign: "center", marginBottom: 50 }}>Select your favourite shiny Pokemón</h3>
      <Pokemons/>
    </div>
  );
}

export default App;
