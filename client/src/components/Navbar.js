import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState("");
  const history = useHistory();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const logout = () => {
    localStorage.clear();
    history.push("/user/signin");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          KitBits
        </a>
        {user ? (
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        ) : (
          <Link to="/user/signin" className="btn btn-primary">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
