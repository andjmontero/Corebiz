import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Footer,
  CarouselDesktop,
  CarouselMobile,
  CarouselProducts,
  Drawer,
  Cart,
  Checkout,
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
import "firebase/firestore";
import { getFireStore } from "./firebase";

function App() {
  //// Products Fetch
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const db = getFireStore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no results");
        }
        setProducts(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searchign items", error);
      })
      .finally(() => setIsLoading(false));
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

  const [cartState, setCartState] = useState();
  const ToggleCart = (open) => {
    setCartState(open);
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <MUIDrawer anchor="right" open={cartState}>
                  <Cart ToggleCart={ToggleCart}></Cart>
                </MUIDrawer>
                <MUIDrawer anchor="left" open={state}>
                  <Drawer ToggleDrawer={ToggleDrawer}></Drawer>
                </MUIDrawer>
                <Navbar
                  ToggleDrawer={ToggleDrawer}
                  ToggleCart={ToggleCart}
                ></Navbar>
                {width > 668 ? <CarouselDesktop /> : <CarouselMobile />}
                {error && <Typography variant="h1">{error}</Typography>}
                <CarouselProducts products={products} />
                {isLoading && <LinearProgress />}
                <Footer />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
                <Footer />
              </Route>
              <Footer />
            </Switch>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
