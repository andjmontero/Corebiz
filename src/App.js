import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CarouselDesktop from "./components/CarouselMain/CarouselDesktop/CarouselDesktop";
import CarouselMobile from "./components/CarouselMain/CarouselMobile/CarouselMobile";
import CarouselProductsDesktop from "./components/CarouselProducts/CarouselProductsDesktop/ProductsDesktop/CarouselDesktop";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./CustomTheme";
function App() {
  //// Products Fetch
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://corebiz-test.herokuapp.com/api/v1/products"
    );
    const data = await response.json();
    setProducts(data);
  };
  //// Screen Size Check
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        {width > 600 ? <CarouselDesktop /> : <CarouselMobile />}
        <CarouselProductsDesktop products={products} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
