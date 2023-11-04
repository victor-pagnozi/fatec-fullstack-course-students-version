import { ItemsList } from "../../shared/Components/ItemsList";
import { Link } from "react-router-dom";
import { ButtonSubmit } from "../../shared/Components/ButtonSubmit";
import "./style.css";
import { useEffect, useState } from "react";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productAsString = window.localStorage.getItem("products") ?? "[]";

    setProducts(JSON.parse(productAsString));
  }, []);

  return (
    <section id="products-list">
      <ItemsList name="PIZZA" products={products} />

      <div className="actions-products-list">
        <Link to={"/create"} className="actions-products-list-button">
          <ButtonSubmit name="CRIAR UM NOVO PRODUTO" />
        </Link>
      </div>
    </section>
  );
};
