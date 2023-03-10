import React, { useState } from "react"
import "./App.css"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  const [product, setProduct] = useState({
    id: 1,
    name: "t shirt noir bonne qualité bon prix",
    price: 500,
    ancienPrice: 750,
    image: "images/product1.jpg",
    quantity: 0,
    remise: 20,
  })

  const [totalPrice, setTotalPrice] = useState(0)

  const increaseQuantity = () => {
    setProduct({ ...product, quantity: product.quantity + 1 })
    setTotalPrice(totalPrice + product.price)
  }

  const decreaseQuantity = () => {
    if (product.quantity > 0) {
      setProduct({ ...product, quantity: product.quantity - 1 })
      setTotalPrice(totalPrice - product.price)
    }
  }

  const cancelOrder = () => {
    setProduct({ ...product, quantity: 0 })
    setTotalPrice(0)
  }

  const addToCart = () => {
    if (product.quantity > 0) {
      alert(` ${product.quantity} ${product.name} a été ajouter au panier!`)
    } else {
      alert("Veuillez choisir la quantité a ajouter au panier")
    }
  }

  return (
    <div class="Gdiv">
      <div className="App">
        <div class="TotalPriceContainer">
          <h3 class="insidePrice">
            <FontAwesomeIcon id="zyada" icon={faMoneyBill} />
            &nbsp; &nbsp; Sous total &nbsp; &nbsp; &nbsp; &nbsp;
            <b> {totalPrice} DZD</b>
          </h3>
        </div>
        <div className="ProductContainer">
          <div className="ImageProduitContainer">
            <img
              class="imagePrincipDuproduit"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="ProductDetailsContainer">
            <h2 class="nomProd">{product.name}</h2>
            <div className="ProductPriceContainer">
              <h3 class="prixProd">{product.price} DZD </h3>
              <h4 class="prixProdAncien">
                {product.ancienPrice} DZD - {product.remise} %
              </h4>

              <div className="plusNminusContainer">
                <button class="QuantityButton" onClick={decreaseQuantity}>
                  -
                </button>
                <span class="quantiteProduit">{product.quantity}</span>
                <button class="QuantityButton" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
            <div className="AnulAjout">
              <button className="annuler" onClick={cancelOrder}>
                Cancel
              </button>
              <button className="ajouter" onClick={addToCart}>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
