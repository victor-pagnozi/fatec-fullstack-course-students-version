import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { CreateProductPage } from "./pages/CreateProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/create" 
          element={<CreateProductPage />}>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
