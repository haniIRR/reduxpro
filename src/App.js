import Cart from "./components/Cart/Cart";
import { useSelector, UseSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./App.css";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div className="App">
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;
