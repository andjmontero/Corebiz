import "./App.css";
import {
  Navbar,
  Footer,
  CarouselDesktop,
  CarouselMobile,
  CarouselProducts,
  Drawer,
} from "./components";
import { useEffect, useState } from "react";
import {
  ThemeProvider,
  Drawer as MUIDrawer,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import theme from "./CustomTheme";
import { CartProvider } from "./CartContext";

function App() {
  //// Products Fetch
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  function fetchProducts() {
    fetch("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((res) => {
        if (!res.ok) {
          throw Error("No se pudo acceder a los productos, pruebe otra vez");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  //// Screen Size Check

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  //------Drawer Mobile Toggle

  const [state, setState] = useState();
  const ToggleDrawer = (open) => {
    setState(open);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CartProvider>
          <MUIDrawer anchor="left" open={state}>
            <Drawer ToggleDrawer={ToggleDrawer}></Drawer>
          </MUIDrawer>
          <Navbar ToggleDrawer={ToggleDrawer}></Navbar>
          {width > 668 ? <CarouselDesktop /> : <CarouselMobile />}
          {error && <Typography variant="h1">{error}</Typography>}
          <CarouselProducts products={products} />
          {isLoading && <LinearProgress />}
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
