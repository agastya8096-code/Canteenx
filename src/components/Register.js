import { useState } from "react";

function Register({
  setShowRegister,
  setShowLogin
}) {  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");

    setShowRegister(false);
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
      <h1 style={{ color: "#4CAF50" }}>
        Create Account
      </h1>
      

      <p>Create your CanteenX account</p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "8px"
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
          borderRadius: "8px"
        }}
      />

      <br /><br />

      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Create Account
      </button>
      <br /><br />

<button
  onClick={() => setShowRegister(false)}
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


  );
}

export default Register;