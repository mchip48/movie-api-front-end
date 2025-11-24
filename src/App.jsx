import { Footer } from "./Footer";
import { Header } from "./Header";
import { ActorsPage } from "./ActorsPage";

function App() {
  const [count, setCount] = useState(0)

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

export default App
