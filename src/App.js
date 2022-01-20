import React, { Fragment, useState } from "react";
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import "./styles/styles.css";

// IMPORTO LAS IMAGENES
import Salteña from "./images/Salteña.png";
import Porteña from "./images/Porteña.png";
import Chicken from "./images/Chicken.png";
import Criolla from "./images/Criolla.png";
import Patagonia from "./images/patagonia.png";

function App() {
  const [burgers, setBurgers] = useState([
    { id: 5, image: Salteña, nombre: "SALTEÑA", precio: 250 },
    { id: 2, image: Porteña, nombre: "PORTEÑA", precio: 180 },
    { id: 3, image: Chicken, nombre: "CHICKEN", precio: 150 },
    { id: 4, image: Criolla, nombre: "CRIOLLA", precio: 200 },
    { id: 1, image: Patagonia, nombre: "PATAGONIA", precio: 240 },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      {/* SECTION CONTENEDOR GLOBAL */}
      <section className="container">
        {/* SECTION DE LA CABECERA */}
        <section className="container__header">
          {/* BOTON DE LA CABECERA */}
          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div>

          {/* TITULO DE LA CABECERA */}
          <div className="container__header__title">
            <h3 className="container__header__title--text">SANGUCHERÍA KIKE</h3>
          </div>

          {/* CART DE LA CABECERA */}
          <div className="container__header__cartDiv">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>

        {/* SECTION CONTENEDOR PRINCIPAL */}
        <section className="container__content">

          <div className="container__content__title">
            <h1>Aprovecha solo por tiempo limitado combos 50% off!</h1>
          </div>

          <div className="container__content__listBurgers">
            {burgers.map((burger) => (
              <Burger
                key={burger.id}
                burger={burger}
                cart={cart}
                setCart={setCart}
                burgers={burgers}
              />
            ))}
          </div>

        </section>

        {/* SECTION FOOTER */}
        <section className="container__footer">
          <p>HAMBURGER 2020 - Todos los derechos reservados</p>
        </section>
        
      </section>
    </Fragment>
  );
}

export default App;
