import FoodCard from "../components/FoodCard";

function Home({
  foods,
  addToCart,
  increaseQty,
  decreaseQty,
  cartItems,
  totalPrice,
}) {
  return (
    <>
      <div className="food-container">

        {foods.map((food) => (
          <FoodCard
            key={food.id}

            id={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            category={food.category}
            stock={food.stock}

            addToCart={() => addToCart(food)}

            increaseQty={increaseQty}
            decreaseQty={decreaseQty}

            cartItems={cartItems}
          />
        ))}

      </div>

      <h2 style={{ textAlign: "center" }}>
        Cart Items
      </h2>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} × {item.quantity}
          </li>
        ))}
      </ul>

      <h3 style={{ textAlign: "center" }}>
        Total Price: ₹{totalPrice}
      </h3>
    </>
  );
}

export default Home;