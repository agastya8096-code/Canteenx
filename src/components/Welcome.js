function Welcome({
  setShowLogin,
  setShowRegister,
  setShowAdminLogin
}) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="CanteenX"
        width="180"
      />

      <h1
        style={{
          fontSize: "55px",
          color: "#ff9800",
          marginBottom: "10px"
        }}
      >
        CanteenX
      </h1>

      <h3
        style={{
          color: "#555"
        }}
      >
        Fast, Easy & Smart Food Ordering
      </h3>

      <p
        style={{
          color: "gray",
          fontSize: "18px"
        }}
      >
        Skip the queue and order your favorite food instantly.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px"
        }}
      >
        <button
          onClick={() => setShowLogin(true)}
          style={{
            width: "140px",
            height: "45px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Login
        </button>

        <button
          onClick={() => setShowRegister(true)}
          style={{
            width: "140px",
            height: "45px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Create Account
        </button>

        <button
          onClick={() => setShowAdminLogin(true)}
          style={{
            width: "140px",
            height: "45px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;