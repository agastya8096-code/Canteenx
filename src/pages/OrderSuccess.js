function OrderSuccess({
  cartItems,
  totalPrice,
  setCartItems,
  setPaymentDone,
  setShowPayment
}){  return (
    <div
      style={{
        width: "600px",
        margin: "50px auto",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray"
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🎉 Order Placed Successfully
      </h1>

      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} x {item.quantity}
          = ₹{item.price * item.quantity}
        </div>
      ))}

      <hr />

      <h2>Total Amount: ₹{totalPrice}</h2>
      <button
  onClick={() => {
    setCartItems([]);
    setPaymentDone(false);
    setShowPayment(false);
  }}
>
  ⬅ Back to Menu
</button>
    </div>
  );
}

export default OrderSuccess;