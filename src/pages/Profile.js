function Profile({ username, role,  setShowProfile
 }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Details</h1>

      <h2>Username: {username}</h2>

      <h2>Role: {role}</h2>
      <button
  onClick={() => setShowProfile(false)}
  style={{
    marginTop: "20px",
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

export default Profile;