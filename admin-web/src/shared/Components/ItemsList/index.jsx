/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.css";
import { ChevronDown, FileEdit, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export const ItemsList = ({ name, products, loadProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const erase = async (productId) => {
    const canDelete = window.confirm(
      "Você deseja realmente deletar o produto?"
    );

    if (canDelete) {
      await fetch(`http://localhost:3000/products/${productId}`, {
        method: "DELETE",
      });

      toast.success("Produto deletado com sucesso!", {
        theme: "colored",
      });

      loadProducts();
    }
  };

  return (
    <>
      <section id="items-list" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <ChevronDown />
          <h2>{name}</h2>
          <ChevronDown />
        </div>
      </section>

      {isOpen && (
        <div className="menu-items">
          <table>
            <thead>
              <tr>
                <td>NOME</td>
                <td>COMPONENTS</td>
                <td className="value-column">VALOR R$</td>
                <td>EDITAR</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={4}></td>
              </tr>
              {products.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.ingredients}</td>
                  <td>{(item.price / 100).toFixed(2)}</td>

                  <td className="table-actions">
                    <FileEdit />
                    <Trash2 color="red" onClick={() => erase(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
