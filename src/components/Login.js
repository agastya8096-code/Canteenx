import { useState } from "react";

function Login({
  setIsLoggedIn,
  setRole,
  setUsername,
  setShowLogin
}) {
  const [username, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const savedUsername =
      localStorage.getItem("username");

    const savedPassword =
      localStorage.getItem("password");

    if (
      username === savedUsername &&
      password === savedPassword
    ) {
      setError("");
      setRole("user");
      setUsername(username);
      setIsLoggedIn(true);
    } else {
      setError("Invalid Username or Password");
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
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="CanteenX"
        width="100"
      />

      <h1
        style={{
          color: "#ff9800"
        }}
      >
        Welcome Back
      </h1>

      <p
        style={{
          color: "gray"
        }}
      >
        Login to continue ordering
      </p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUserInput(e.target.value)
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
        onClick={handleLogin}
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

      <br />

      <div style={{ marginTop: "25px" }}>
  <button
    onClick={() => setShowLogin(false)}
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

export default Login;