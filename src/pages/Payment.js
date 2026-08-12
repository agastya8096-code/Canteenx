function Payment({ setPaymentDone,  setShowPayment
 }) {
  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px gray"
      }}
    >
      <h1>💳 Payment</h1>

      <h3>Select Payment Method</h3>

      <button
        onClick={() => setPaymentDone(true)}
      >
        UPI
      </button>

      <br /><br />

      <button
        onClick={() => setPaymentDone(true)}
      >
        Credit / Debit Card
      </button>

      <br /><br />

      <button
        onClick={() => setPaymentDone(true)}
      >
        Cash on Delivery
      </button><br /><br />

<button
  onClick={() => setShowPayment(false)}
  style={{
    background: "#607D8B",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  ← Back to Menu
</button>
    </div>
  );
}

export default Payment;