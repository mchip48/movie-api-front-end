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

function ActorsPage() {
  
  const [actors, setActors] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/actors.json").then((response) => {
      console.log(response.data);
      setActors(response.data);
    })
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <ActorsNew />
      <ActorsIndex actorsPage={actors} />
    </div>
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
