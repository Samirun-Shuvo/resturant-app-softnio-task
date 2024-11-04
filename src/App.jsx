import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PopularFoods from "./components/PopularFoods";
import BookTable from "./components/BookTable";

function App() {
  return (
    <div>
      <Header />
      <About />
      <PopularFoods/>
      <BookTable/>
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
