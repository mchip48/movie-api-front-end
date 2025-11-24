import { Footer } from "./Footer";
import { Header } from "./Header";
import { ActorsPage } from "./ActorsPage";

function App() {

  return (
    <div>
      <Header />
      <ActorsPage />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header>
      <a href='#'>Home</a> | <a href='#actors-index'>All actors</a> | <a href='#actors-new'>New Actor</a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2025</p>
    </footer>
  );
}


export default App
