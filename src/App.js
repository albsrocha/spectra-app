import "boxicons";
import './App.css';
import Header from "./components/header/index.js"
import Navbar from "./components/navbar/index.js"
import Contatos from "./screens/contacts/index.js"

function App() {
  return (
    <div className="main">
      <Header/>
      <Navbar/>
      <Contatos/>
    </div>
  );
}

export default App;
