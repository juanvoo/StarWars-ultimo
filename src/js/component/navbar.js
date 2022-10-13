import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-light px-5 py-4">
      <div className="container-fluid">
        <Link class="navbar-brand" to={"/"}>
          <img
            src="https://img.icons8.com/ios/50/000000/star-wars.png"
            alt=""
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="btn-group">
          {store.favorites.length != 0 ? (
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites<span className="px-2 text-light bg-secondary">{store.favorites.length}</span>
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
          )}
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((item, index) => {
              return (
                <li
                  className="dropdown-item d-flex justify-content-between"
                  key={index}
                >
                  {item}{" "}
                  <i
                    class="fas fa-trash-alt text-danger"
                    onClick={() => {
                      actions.deleteFavorites(index);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
