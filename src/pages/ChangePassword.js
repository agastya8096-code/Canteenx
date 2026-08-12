import { useState } from "react";

function ChangePassword({
  setShowChangePassword
}) {
  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const handleChangePassword = () => {
    const savedPassword =
      localStorage.getItem("password");

    if (oldPassword !== savedPassword) {
      alert("Old Password is Incorrect");
      return;
    }

    localStorage.setItem(
      "password",
      newPassword
    );

    alert(
      "Password Changed Successfully"
    );

    setShowChangePassword(false);
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "80px auto",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray"
      }}
    >
      <h1>Change Password</h1>

      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) =>
          setOldPassword(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) =>
          setNewPassword(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={handleChangePassword}
      >
        Change Password
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          setShowChangePassword(false)
        }
      >
        ← Back
      </button>
    </div>
  );
}

export default ChangePassword;