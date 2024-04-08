import "./App.css";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className='App'>
      <h1>Product Management</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
}

export default App;
