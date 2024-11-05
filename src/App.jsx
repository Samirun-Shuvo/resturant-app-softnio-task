import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import PopularFoods from "./components/PopularFoods";
import BookTable from "./components/BookTable";
import CustomerReviews from "./components/CustomerReviews";

function App() {
  return (
    <div>
      <Header />
      <About />
      <PopularFoods />
      <BookTable />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
