import { useState } from "react";

function AdminLogin({
  setIsAdmin,
  setIsLoggedIn,
  setRole,
  setShowAdminLogin
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      setError("");
      setIsAdmin(true);
      setRole("admin");
      setIsLoggedIn(true);
      setShowAdminLogin(false);
    } else {
      setError("Invalid Admin Credentials");
    }
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "80px auto",
        padding: "40px",
        background: "white",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
        alt="Admin"
        width="100"
      />

      <h1
        style={{
          color: "#ff9800"
        }}
      >
        Admin Login
      </h1>

      <p
        style={{
          color: "gray"
        }}
      >
        Manage Food Items & Stock
      </p>

      <input
        type="text"
        placeholder="Admin Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "8px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "8px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />

      <br />
      <br />

      <button
        onClick={login}
        style={{
          width: "100%",
          padding: "12px",
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

      {error && (
        <div
          style={{
            background: "#ffe5e5",
            color: "#d32f2f",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "15px",
            fontWeight: "bold",
            fontSize: "14px"
          }}
        >
          ❌ {error}
        </div>
      )}

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() =>
            setShowAdminLogin(false)
          }
          style={{
            background: "#607D8B",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;