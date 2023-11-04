import "./style.css";

export function ButtonSubmit({ name }) {
  return (
    <button id="button-submit" type="submit">
      {name}
    </button>
  );
}
