import { useEffect, useState } from "react";
import HamburgerIcon from "../../../assets/hamburger.png";
import PizzaIcon from "../../../assets/pizza.png";

export function HeaderComponent() {
  const [currentTitle, setCurrentTitle] = useState();

  useEffect(() => {
    if (window.location.pathname === "/create") {
      setCurrentTitle("Criar Pedido");
    }

    if (window.location.pathname === "/") {
      setCurrentTitle("SEJA MUITO BEM VINDO");
    }
  }, []);

  return (
    <>
      <h1 id="header">
        <img src={HamburgerIcon} alt="" />
        MINHA XEPA
        <img src={PizzaIcon} alt="" />
      </h1>
      <p>{currentTitle}</p>
    </>
  );
}
