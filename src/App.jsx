import Header from "./components/Header/Header.component";
import PokemonsList from "./components/PokemonList/PokemonList.component";

function App() {
  return (
    <>
      <Header/>
      {/* <h3 style={{ textAlign: "center", marginBottom: 50 }}>Select your favourite shiny Pokemón</h3> */}
      <PokemonsList/>
    </>
  );
}

export default App;
