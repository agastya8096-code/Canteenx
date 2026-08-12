function OrderHistory({
  orders,
  setShowOrderHistory
}) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.orderId}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "15px",
              borderRadius: "10px",
              background: "white"
            }}
          >
            <h3>
              Order ID: {order.orderId}
            </h3>

            <p>Date: {order.date}</p>

            <p>Time: {order.time}</p>

            <h3>Items Ordered:</h3>

            {order.items &&
              order.items.map((item) => (
                <p key={item.id}>
                  {item.name} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
              ))}

            <h2
              style={{
                color:"black"
              }}
            >
              Total: ₹{order.total}
            </h2>
          </div>
        ))
      )}

      <button
        onClick={() =>
          setShowOrderHistory(false)
        }
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ← Back to Menu
      </button>
    </div>
  );
}

export default OrderHistory;