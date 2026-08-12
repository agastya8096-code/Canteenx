import "./App.css";
import FoodCard from "./components/FoodCard";
import Navbar from "./components/Navbar";
import { useState } from "react";

import Login from "./components/Login";
import OrderSuccess from "./pages/OrderSuccess";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import ChangePassword from "./pages/ChangePassword";
import AdminLogin from "./pages/AdminLogin";

function App() {
  // ============================================================
  // CART
  // ============================================================

  const [cartItems, setCartItems] = useState([]);

  // Maximum quantity of ONE food item
  const MAX_QUANTITY = 10;

  // ============================================================
  // SEARCH / CATEGORY
  // ============================================================

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // ============================================================
  // LOGIN / REGISTER
  // ============================================================

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");

  // ============================================================
  // ADMIN FOOD FORM
  // ============================================================

  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCategory, setFoodCategory] = useState("");

  // ============================================================
  // PAYMENT
  // ============================================================

  const [showPayment, setShowPayment] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  // ============================================================
  // PROFILE
  // ============================================================

  const [showProfile, setShowProfile] = useState(false);

  // ============================================================
  // ORDERS
  // ============================================================

  const [orders, setOrders] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  // ============================================================
  // CHANGE PASSWORD
  // ============================================================

  const [showChangePassword, setShowChangePassword] = useState(false);

  // ============================================================
  // ADMIN
  // ============================================================

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // ============================================================
  // FOOD DATA
  // ============================================================

  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      price: 180,
      category: "Biryani",
      stock: true,
      image:
        "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    },

    {
      id: 2,
      name: "Veg Biryani",
      price: 140,
      category: "Biryani",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
    },

    {
      id: 3,
      name: "Paneer Biryani",
      price: 160,
      category: "Biryani",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=400",
    },

    {
      id: 4,
      name: "Burger",
      price: 50,
      category: "Fast Food",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    },

    {
      id: 5,
      name: "Pizza",
      price: 120,
      category: "Fast Food",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    },

    {
      id: 6,
      name: "French Fries",
      price: 70,
      category: "Fast Food",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
    },

    {
      id: 7,
      name: "Sandwich",
      price: 60,
      category: "Fast Food",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
    },

    {
      id: 8,
      name: "Veg Fried Rice",
      price: 90,
      category: "Chinese",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    },

    {
      id: 9,
      name: "Noodles",
      price: 80,
      category: "Chinese",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400",
    },

    {
      id: 10,
      name: "Momos",
      price: 80,
      category: "Chinese",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
    },

    {
      id: 11,
      name: "Masala Dosa",
      price: 70,
      category: "South Indian",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400",
    },

    {
      id: 12,
      name: "Idli",
      price: 40,
      category: "South Indian",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
    },

    {
      id: 13,
      name: "Vada",
      price: 30,
      category: "South Indian",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
    },

    {
      id: 14,
      name: "Tea",
      price: 20,
      category: "Drinks",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    },

    {
      id: 15,
      name: "Coffee",
      price: 40,
      category: "Drinks",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
    },

    {
      id: 16,
      name: "Cold Drink",
      price: 30,
      category: "Drinks",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    },

    {
      id: 17,
      name: "Ice Cream",
      price: 50,
      category: "Desserts",
      stock: true,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    },
  ]);

  // ============================================================
  // FILTER FOOD
  // ============================================================

  const filteredFoods = foods.filter((food) => {
    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || food.category === category;

    return searchMatch && categoryMatch;
  });

  // ============================================================
  // ADD FOOD - ADMIN
  // ============================================================

  const addFood = () => {
    if (!foodName || !foodPrice || !foodCategory) {
      alert("Please fill all fields");
      return;
    }

    const newFood = {
      id:
        foods.length > 0
          ? Math.max(...foods.map((food) => food.id)) + 1
          : 1,

      name: foodName,
      price: Number(foodPrice),
      category: foodCategory,
      stock: true,
      image: foodImage,
    };

    setFoods((oldFoods) => [...oldFoods, newFood]);

    setFoodName("");
    setFoodPrice("");
    setFoodCategory("");
    setFoodImage("");
  };

  // ============================================================
  // ADD TO CART
  // ============================================================

  const addToCart = (food) => {
    setCartItems((oldCart) => {
      const existingItem = oldCart.find(
        (item) => item.id === food.id
      );

      // First time adding
      if (!existingItem) {
        return [
          ...oldCart,
          {
            ...food,
            quantity: 1,
          },
        ];
      }

      // Existing item already reached 10
      if (existingItem.quantity >= MAX_QUANTITY) {
        alert(`Maximum ${MAX_QUANTITY} ${food.name} allowed.`);
        return oldCart;
      }

      // Increase
      return oldCart.map((item) =>
        item.id === food.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    });
  };

  // ============================================================
  // PLUS / INCREASE
  // ============================================================

  const increaseQuantity = (id) => {
    setCartItems((oldCart) => {
      return oldCart.map((item) => {
        if (item.id !== id) {
          return item;
        }

        // STOP EXACTLY AT 10
        if (item.quantity >= MAX_QUANTITY) {
          alert(`Maximum ${MAX_QUANTITY} items allowed.`);
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    });
  };

  // ============================================================
  // MINUS / DECREASE
  // ============================================================

  const decreaseQuantity = (id) => {
    setCartItems((oldCart) => {
      return oldCart
        .map((item) => {
          if (item.id !== id) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // ============================================================
  // REMOVE CART ITEM
  // ============================================================

  const removeCartItem = (id) => {
    setCartItems((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  // ============================================================
  // TOTAL PRICE
  // ============================================================

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // ============================================================
  // CHECKOUT
  // ============================================================

  const checkout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const newOrder = {
      orderId: "CX" + Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      total: totalPrice,
      items: cartItems.map((item) => ({
        ...item,
        quantity: Math.min(
          item.quantity,
          MAX_QUANTITY
        ),
      })),
    };

    setOrders((oldOrders) => [
      ...oldOrders,
      newOrder,
    ]);

    setShowPayment(true);
  };

  // ============================================================
  // DELETE FOOD
  // ============================================================

  const deleteFood = (id) => {
    setFoods((oldFoods) =>
      oldFoods.filter((food) => food.id !== id)
    );

    setCartItems((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  // ============================================================
  // EDIT PRICE
  // ============================================================

  const editPrice = (id) => {
    const newPrice = prompt("Enter New Price");

    if (
      newPrice !== null &&
      newPrice !== "" &&
      !isNaN(newPrice)
    ) {
      setFoods((oldFoods) =>
        oldFoods.map((food) =>
          food.id === id
            ? {
                ...food,
                price: Number(newPrice),
              }
            : food
        )
      );
    }
  };

  // ============================================================
  // TOGGLE STOCK
  // ============================================================

  const toggleStock = (id) => {
    setFoods((oldFoods) =>
      oldFoods.map((food) =>
        food.id === id
          ? {
              ...food,
              stock: !food.stock,
            }
          : food
      )
    );
  };

  // ============================================================
  // PAYMENT PAGE
  // ============================================================

  if (showPayment && !paymentDone) {
    return (
      <Payment
        setPaymentDone={setPaymentDone}
        setShowPayment={setShowPayment}
      />
    );
  }

  // ============================================================
  // PROFILE
  // ============================================================

  if (showProfile) {
    return (
      <Profile
        username={username}
        role={role}
        setShowProfile={setShowProfile}
      />
    );
  }

  // ============================================================
  // CHANGE PASSWORD
  // ============================================================

  if (showChangePassword) {
    return (
      <ChangePassword
        setShowChangePassword={
          setShowChangePassword
        }
      />
    );
  }

  // ============================================================
  // ADMIN LOGIN
  // ============================================================

  if (showAdminLogin) {
    return (
      <AdminLogin
        setShowAdminLogin={setShowAdminLogin}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
        setRole={setRole}
      />
    );
  }

  // ============================================================
  // REGISTER
  // ============================================================

  if (showRegister) {
    return (
      <Register
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />
    );
  }

  // ============================================================
  // LOGIN
  // ============================================================

  if (showLogin && !isLoggedIn) {
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setRole={setRole}
        setUsername={setUsername}
        setShowLogin={setShowLogin}
      />
    );
  }

  // ============================================================
  // WELCOME
  // ============================================================

  if (!isLoggedIn) {
    return (
      <Welcome
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        setShowAdminLogin={setShowAdminLogin}
      />
    );
  }

  // ============================================================
  // ORDER SUCCESS
  // ============================================================

  if (paymentDone) {
    return (
      <OrderSuccess
        cartItems={cartItems}
        totalPrice={totalPrice}
        setCartItems={setCartItems}
        setPaymentDone={setPaymentDone}
        setShowPayment={setShowPayment}
      />
    );
  }

  // ============================================================
  // ORDER HISTORY
  // ============================================================

  if (showOrderHistory) {
    return (
      <OrderHistory
        orders={orders}
        setShowOrderHistory={
          setShowOrderHistory
        }
      />
    );
  }

  // ============================================================
  // MAIN APPLICATION
  // ============================================================

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <Navbar
        username={username}
        setIsLoggedIn={setIsLoggedIn}
        setShowProfile={setShowProfile}
        setShowOrderHistory={
          setShowOrderHistory
        }
        setShowChangePassword={
          setShowChangePassword
        }
        cartItems={cartItems}
      />

      {/* ================= SEARCH ================= */}

      <div className="search-container">

        <input
          type="text"
          placeholder="🔍 Search food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* ================= CATEGORY BUTTONS ================= */}

      <div className="category-buttons">

        <button
          onClick={() => setCategory("All")}
          className={
            category === "All"
              ? "active-category"
              : ""
          }
        >
          🍽️ All
        </button>

        <button
          onClick={() => setCategory("Biryani")}
          className={
            category === "Biryani"
              ? "active-category"
              : ""
          }
        >
          🍛 Biryani
        </button>

        <button
          onClick={() =>
            setCategory("Fast Food")
          }
          className={
            category === "Fast Food"
              ? "active-category"
              : ""
          }
        >
          🍔 Fast Food
        </button>

        <button
          onClick={() => setCategory("Chinese")}
          className={
            category === "Chinese"
              ? "active-category"
              : ""
          }
        >
          🍜 Chinese
        </button>

        <button
          onClick={() =>
            setCategory("South Indian")
          }
          className={
            category === "South Indian"
              ? "active-category"
              : ""
          }
        >
          🥥 South Indian
        </button>

        <button
          onClick={() => setCategory("Drinks")}
          className={
            category === "Drinks"
              ? "active-category"
              : ""
          }
        >
          🥤 Drinks
        </button>

        <button
          onClick={() =>
            setCategory("Desserts")
          }
          className={
            category === "Desserts"
              ? "active-category"
              : ""
          }
        >
          🍨 Desserts
        </button>

      </div>

      {/* ================= ADMIN FOOD FORM ================= */}

      {role === "admin" && (
        <>
          <h2 className="admin-title">
            Add New Food
          </h2>

          <div className="admin-food-form">

            <input
              type="text"
              placeholder="Food Name"
              value={foodName}
              onChange={(e) =>
                setFoodName(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={foodPrice}
              onChange={(e) =>
                setFoodPrice(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Category"
              value={foodCategory}
              onChange={(e) =>
                setFoodCategory(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              value={foodImage}
              onChange={(e) =>
                setFoodImage(e.target.value)
              }
            />

            <button onClick={addFood}>
              Add Food
            </button>

          </div>
        </>
      )}

      {/* ================= MAIN CONTENT ================= */}

      <div className="main-content">

        {/* ================= FOOD CARDS ================= */}

        <div className="food-container">

          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                image={food.image}
                category={food.category}
                stock={food.stock}
                cartItems={cartItems}

                addToCart={() =>
                  addToCart(food)
                }

                increaseQty={
                  increaseQuantity
                }

                decreaseQty={
                  decreaseQuantity
                }

                isAdmin={
                  role === "admin"
                }

                deleteFood={() =>
                  deleteFood(food.id)
                }

                editPrice={() =>
                  editPrice(food.id)
                }

                toggleStock={() =>
                  toggleStock(food.id)
                }
              />
            ))
          ) : (
            <div className="no-food">
              <h2>😔 No food found</h2>
              <p>
                Try searching for something else.
              </p>
            </div>
          )}

        </div>

        {/* ================= CART ================= */}

        {cartItems.length > 0 && (
          <div className="cart-sidebar">

            <h2>
              🛒 My Cart
            </h2>

            <p className="cart-count">
              {cartItems.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}{" "}
              items selected
            </p>

            {/* CART ITEMS */}

            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >

                <h3>
                  {item.name}
                </h3>

                <div className="cart-controls">

                  {/* MINUS */}

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                    className="cart-minus"
                  >
                    −
                  </button>

                  {/* QUANTITY */}

                  <strong>
                    {item.quantity}
                  </strong>

                  {/* PLUS */}

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                    disabled={
                      item.quantity >=
                      MAX_QUANTITY
                    }
                    className="cart-plus"
                  >
                    +
                  </button>

                  {/* DELETE */}

                  <button
                    onClick={() =>
                      removeCartItem(
                        item.id
                      )
                    }
                    className="cart-delete"
                  >
                    🗑️
                  </button>

                </div>

                {/* PRICE */}

                <p className="cart-price">
                  ₹{item.price} ×{" "}
                  {item.quantity}
                  {" = "}
                  ₹
                  {item.price *
                    item.quantity}
                </p>

                {/* MAXIMUM MESSAGE */}

                {item.quantity >=
                  MAX_QUANTITY && (
                  <p className="max-message">
                    Maximum 10 allowed
                  </p>
                )}

              </div>
            ))}

            {/* TOTAL */}

            <h3 className="cart-total">
              Total Price: ₹{totalPrice}
            </h3>

            {/* CHECKOUT */}

            <button
              onClick={checkout}
              className="checkout-btn"
            >
              Checkout
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;