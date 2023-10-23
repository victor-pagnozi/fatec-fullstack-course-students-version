export const CreateProductPage = () => {
  return (
    <form>
      <span>
        <label htmlFor="product-name">Nome:</label>
        <input id="product-name" type="text" name="name" required />
      </span>

      <span>
        <label htmlFor="product-ingredients">Componentes:</label>
        <textarea
          name="ingredients"
          id="product-ingredients"
          required
        ></textarea>
      </span>

      <span>
        <label htmlFor="product-value">Preço:</label>
        <input type="number" required id="product-value" name="price" />
      </span>
    </form>
  );
};
