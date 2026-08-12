import React, { useState } from "react";

function FoodCard({
  id,
  name,
  price,
  image,
  category,
  stock,
  cartItems,
  addToCart,
  increaseQty,
  decreaseQty,
  isAdmin,
  deleteFood,
  editPrice,
  toggleStock,
}) {

  const [added, setAdded] =
    useState(false);

  // ==========================================================
  // MAXIMUM
  // ==========================================================

  const MAX = 10;

  // ==========================================================
  // FIND CART ITEM
  // ==========================================================

  const cartItem =
    cartItems.find(
      (item) => item.id === id
    );

  // ==========================================================
  // QUANTITY
  // ==========================================================

  const quantity = cartItem
    ? Number(cartItem.quantity)
    : 0;

  // ==========================================================
  // STOCK
  // ==========================================================

  const available =
    stock !== false;

  // ==========================================================
  // ADD
  // ==========================================================

  const handleAdd = () => {

    if (!available) {
      return;
    }

    addToCart();

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  // ==========================================================
  // PLUS
  // ==========================================================

  const handlePlus = () => {

    console.log(
      "Current quantity:",
      quantity
    );

    // ⭐ STOP AT 10

    if (quantity >= MAX) {

      console.log(
        "LIMIT REACHED: 10"
      );

      return;
    }

    increaseQty(id);
  };

  // ==========================================================
  // MINUS
  // ==========================================================

  const handleMinus = () => {

    decreaseQty(id);
  };

  return (
    <div className="food-card">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="food-image-container">

        {image ? (

          <img
            src={image}
            alt={name}
            className="food-image"
          />

        ) : (

          <div
            className=
              "food-image-placeholder"
          >
            🍔
          </div>

        )}

        {!available && (

          <div
            className=
              "out-of-stock-overlay"
          >
            <span>
              OUT OF STOCK
            </span>
          </div>

        )}

      </div>

      {/* =====================================================
          DETAILS
      ===================================================== */}

      <div className="food-details">

        <h2>
          {name}
        </h2>

        <p className="food-category">
          {category}
        </p>

        <p className="food-price">
          ₹{price}
        </p>

        {/* AVAILABLE */}

        <p
          style={{
            color:
              available
                ? "green"
                : "red",
            fontWeight:
              "bold",
          }}
        >
          {available
            ? "🟢 Available"
            : "🔴 Out of Stock"}
        </p>

        {/* =================================================
            CART
        ================================================= */}

        {available && (

          cartItem ? (

            <div>

              {/* QUANTITY BUTTONS */}

              <div
                className=
                  "swiggy-qty"
              >

                {/* MINUS */}

                <button
                  type="button"
                  onClick={
                    handleMinus
                  }
                >
                  −
                </button>

                {/* NUMBER */}

                <span>
                  {quantity}
                </span>

                {/* PLUS */}

                <button
                  type="button"
                  onClick={
                    handlePlus
                  }

                  disabled={
                    quantity >=
                    MAX
                  }
                >
                  +
                </button>

              </div>

              {/* LIMIT MESSAGE */}

              {quantity >= MAX && (

                <p
                  style={{
                    color:
                      "red",
                    fontWeight:
                      "bold",
                    textAlign:
                      "center",
                    fontSize:
                      "13px",
                  }}
                >
                  Maximum 10
                </p>

              )}

            </div>

          ) : (

            /* ADD */

            <button
              type="button"
              className=
                "add-btn"
              onClick={
                handleAdd
              }
            >
              {added
                ? "✓ Added"
                : "Add"}
            </button>

          )

        )}

        {/* =================================================
            OUT OF STOCK
        ================================================= */}

        {!available && (

          <button
            disabled
            className=
              "out-of-stock-btn"
          >
            🔴 Out of Stock
          </button>

        )}

        {/* =================================================
            ADMIN
        ================================================= */}

        {isAdmin && (

          <div
            style={{
              marginTop:
                "10px",
              display:
                "flex",
              flexDirection:
                "column",
              gap:
                "8px",
            }}
          >

            <button
              onClick={
                editPrice
              }
              style={{
                background:
                  "#2196F3",
                color:
                  "white",
                border:
                  "none",
                padding:
                  "8px",
                borderRadius:
                  "5px",
              }}
            >
              ✏️ Edit Price
            </button>

            <button
              onClick={
                toggleStock
              }
              style={{
                background:
                  "#FF9800",
                color:
                  "white",
                border:
                  "none",
                padding:
                  "8px",
                borderRadius:
                  "5px",
              }}
            >
              🚫 Toggle Stock
            </button>

            <button
              onClick={
                deleteFood
              }
              style={{
                background:
                  "red",
                color:
                  "white",
                border:
                  "none",
                padding:
                  "8px",
                borderRadius:
                  "5px",
              }}
            >
              ❌ Delete Item
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default React.memo(
  FoodCard
);