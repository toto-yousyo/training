function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit"> send </button>
    </form>
  );
}

function ValidateForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(" invalid address");
    } else {
      setError("");
      alert(` success: ${email}`);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          mail address:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Send </button>
      </form>
    );
  };
}
