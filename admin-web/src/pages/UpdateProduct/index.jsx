import { ButtonSubmit } from "../../shared/Components/ButtonSubmit";
import { ButtonCancel } from "../../shared/Components/ButtonCancel";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { apiInstance } from "../../shared/services/api-instance";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

export const UpdateProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    ingredients: "",
    price: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

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

      // await fetch(`http://localhost:3000/products/${id}`, {
      //   body: JSON.stringify({ ...product, price: product.price * 100 }),
      //   method: "PUT",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // });

      await apiInstance.put(`/products/${id}`, product);

      toast.success("Produto atualizado com sucesso!");

      return window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async function () {
      const { data } = await apiInstance(`/products/${id}`);

      // const result = await fetch(`http://localhost:3000/products/${id}`);
      // const data = await result.json();

      setProduct({
        ingredients: data.ingredients,
        name: data.name,
        price: data.price,
      });
    })();
  }, []);

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
          name={isLoading ? <ClipLoader cssOverride={override} /> : "Salvar"}
        />
        <ButtonCancel
          name="Cancelar"
          onClick={() => window.location.replace("/")}
        />
      </div>
    </form>
  );
};
