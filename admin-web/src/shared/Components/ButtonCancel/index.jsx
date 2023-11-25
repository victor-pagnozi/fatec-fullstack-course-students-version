import "./style.css";

export function ButtonCancel({ name, onClick }) {
  return (
    <button id="button-cancel" type="reset" onClick={onClick}>
      {name}
    </button>
  );
}
