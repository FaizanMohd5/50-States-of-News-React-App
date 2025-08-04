const Navbar = ({ setCategory }) => {
  const categories = [
    { name: "Technology", key: "technology" },
    { name: "Business", key: "business" },
    { name: "Health", key: "health" },
    { name: "Sports", key: "sports" },
    { name: "Entertainment", key: "entertainment" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ background: "linear-gradient(90deg, #1f1c2c, #928dab)", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🗽50 States of News
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((cat) => (
              <li className="nav-item mx-1" key={cat.key}>
                <a
                  className="nav-link text-white px-3 py-2 rounded"
                  style={{ transition: "background 0.3s", cursor: "pointer" }}
                  onClick={() => setCategory(cat.key)}
                  onMouseOver={(e) => (e.target.style.background = "#ffffff33")}
                  onMouseOut={(e) => (e.target.style.background = "transparent")}
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
