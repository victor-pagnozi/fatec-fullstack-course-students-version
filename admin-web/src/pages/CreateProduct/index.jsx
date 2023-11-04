import { ButtonSubmit } from "../../shared/Components/ButtonSubmit";
import { ButtonCancel } from "../../shared/Components/ButtonCancel";
import "./style.css";
import { useState } from "react";

export const CreateProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    ingredients: "",
    price: 0,
  });

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const productAsString = window.localStorage.getItem("products") ?? "[]";

    const products = JSON.parse(productAsString);

    window.localStorage.setItem(
      "products",
      JSON.stringify([...products, { ...product, price: product.price * 100 }])
    );

    return window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <label htmlFor="product-name">Nome:</label>
        <input
          id="product-name"
          type="text"
          name="name"
          value={product.name}
          required
          onChange={handleChange}
        />
      </span>

      <span>
        <label htmlFor="product-ingredients">Componentes:</label>
        <textarea
          name="ingredients"
          id="product-ingredients"
          value={product.ingredients}
          onChange={handleChange}
          required
        ></textarea>
      </span>

      <span>
        <label htmlFor="product-value">Valor:</label>
        <input
          type="number"
          required
          id="product-value"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </span>

      <div className="buttons-form">
        <ButtonSubmit name="Salvar" />
        <ButtonCancel name="Cancelar" />
      </div>
    </form>
  );
};
