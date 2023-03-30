import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <div>
      <div className="click-closed"></div>
      <Search />
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link className="navbar-brand text-brand" to="/">
            Estate<span className="color-b">Agency</span>
          </Link>

          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/property">
                  Property
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/blog">
                  Blog
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item " to="/propertySingle">
                    Property Single
                  </Link>
                  <Link className="dropdown-item " to="/blogSingle">
                    Blog Single
                  </Link>
                  <Link className="dropdown-item " to="/agentGrid">
                    Agents Grid
                  </Link>
                  <Link className="dropdown-item " to="/agentSingle">
                    Agent Single
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#search"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
