import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { CreateProductPage } from "./pages/CreateProduct";
import { ProductsPage } from "./pages/Products";
import { UpdateProductPage } from "./pages/UpdateProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/create" element={<CreateProductPage />} />
        <Route path="/update/:id" element={<UpdateProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
