import ProductList from "./components/ProductList";
import { ProductContext, useProducts } from "./context/productContext";

const App = () => {
  const { loading, error, products } = useProducts();

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Products Catalog</h1>
        {loading && <p>Loading...</p>}
        {error && <div className="error text-red-500">Error : {error}</div>}

        <ProductList products={products} />
      </div>
    </>
  );
};

export default App;
