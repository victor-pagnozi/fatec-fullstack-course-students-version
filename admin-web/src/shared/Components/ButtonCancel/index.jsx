import "./style.css";

export function ButtonCancel({ name }) {
  return (
    <button id="button-cancel" type="reset">
      {name}
    </button>
  );
}
