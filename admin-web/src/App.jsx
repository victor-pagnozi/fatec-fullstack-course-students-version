import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { CreateProductPage } from "./pages/CreateProduct";
import { ProductsPage } from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/create" element={<CreateProductPage />} />
        <Route path="/update/:id" element={<CreateProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
