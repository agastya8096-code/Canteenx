import { useState } from "react";

function Navbar({
  username,
  setIsLoggedIn,
  setShowProfile,
  setShowOrderHistory,
  setShowChangePassword,
  setShowFavorites
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
padding: "10px 25px",
        background:
          "linear-gradient(135deg, #ff9800, #ff6f00)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)"
      }}
    >
      {/* Left Section */}
      <div>
        <h1
          style={{
            color: "white",
            margin: 0,
            fontSize: "40px",
            fontWeight: "800",
            letterSpacing: "1px"
          }}
        >
          🍔 CanteenX
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.95)",
            margin: 0,
            fontSize: "15px"
          }}
        >
          Welcome back, {username} 👋
        </p>
      </div>

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative"
        }}
      >
        {/* Favorites */}
        

        {/* Notification */}
        <div
          style={{
            fontSize: "26px",
            cursor: "pointer"
          }}
        >
          🔔
        </div>

        {/* Profile */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "white",
            color: "#ff9800",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            cursor: "pointer",
            fontWeight: "bold",
            border: "3px solid rgba(255,255,255,0.4)",
            boxShadow:
              "0 5px 15px rgba(0,0,0,0.2)"
          }}
        >
          👤
        </div>

        {/* Dropdown */}
        {showMenu && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "75px",
              background: "white",
              borderRadius: "12px",
              width: "240px",
              overflow: "hidden",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.2)"
            }}
          >
            <div
              style={{
                padding: "15px",
                background: "#fff8f0",
                borderBottom: "1px solid #eee",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              👋 Hello, {username}
            </div>

            <div
              style={{
                padding: "14px",
                cursor: "pointer"
              }}
              onClick={() => setShowProfile(true)}
            >
              👤 Profile Details
            </div>

            <div
              style={{
                padding: "14px",
                cursor: "pointer"
              }}
              onClick={() =>
                setShowOrderHistory(true)
              }
            >
              📦 Order History
            </div>

            

            <div
              style={{
                padding: "14px",
                cursor: "pointer"
              }}
              onClick={() =>
                setShowChangePassword(true)
              }
            >
              🔒 Change Password
            </div>

            <div
              style={{
                padding: "14px",
                cursor: "pointer"
              }}
            >
              🎧 Help & Support
            </div>

            <div
              style={{
                padding: "14px",
                color: "red",
                cursor: "pointer",
                borderTop: "1px solid #eee",
                fontWeight: "bold"
              }}
              onClick={() =>
                setIsLoggedIn(false)
              }
            >
              🚪 Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;