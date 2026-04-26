import "./App.css";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open!
    </footer>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <img />
      <h3></h3>
      <p></p>
    </div>
  );
}

export default App;
