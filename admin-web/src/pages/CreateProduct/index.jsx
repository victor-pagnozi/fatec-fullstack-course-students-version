import { ButtonSubmit } from "../../shared/Components/ButtonSubmit";
import { ButtonCancel } from "../../shared/Components/ButtonCancel";
import "./style.css";
import { toast } from "react-toastify";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

export const CreateProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    ingredients: "",
    price: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (product.price <= 1) {
      toast.error("Produto não pode ser menor que zero.", {
        theme: "colored",
      });

      setProduct((previous) => ({ ...previous, price: 0 }));

      return;
    }
    if (isLoading) return;

    try {
      setIsLoading(true);

      await fetch("http://localhost:3000/products", {
        body: JSON.stringify({ ...product, price: product.price * 100 }),
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      toast.success("Produto cadastrado com sucesso!");

      setTimeout(() => {
        return window.location.replace("/");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
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
        <ButtonSubmit
          name={
            isLoading ? (
              <ClipLoader cssOverride={override} />
            ) : (
              "Salvar"
            )
          }
        />
        <ButtonCancel
          name="Cancelar"
          onClick={() => window.location.replace("/")}
        />
      </div>
    </form>
  );
};
