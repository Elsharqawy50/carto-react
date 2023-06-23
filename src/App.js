import "bootstrap/dist/css/bootstrap.min.css";
import Header from "components/Header";
import "style/main.scss";
import Products from "components/products/Products";
import store from "store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
