import { ItemsList } from "../../shared/Components/ItemsList";
import { Link } from "react-router-dom";
import { ButtonSubmit } from "../../shared/Components/ButtonSubmit";
import "./style.css";
import { useEffect, useState } from "react";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await fetch("http://localhost:3000/products");

    const data = await response.json();

    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section id="products-list">
      <ItemsList name="PIZZA" products={products} loadProducts={loadProducts} />

      <div className="actions-products-list">
        <Link to={"/create"} className="actions-products-list-button">
          <ButtonSubmit name="CRIAR UM NOVO PRODUTO" />
        </Link>
      </div>
    </section>
  );
};
