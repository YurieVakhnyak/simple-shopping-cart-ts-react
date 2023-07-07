import Header from "./component/Header";
import Footer from "./component/Footer";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;
  const content = (
    <div className="App">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </div>
  );
  return content;
}

export default App;
