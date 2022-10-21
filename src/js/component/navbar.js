import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();

  const handleLogout = ()=>{
		
		let onLogged = actions.logout();

		if(!onLogged){//true
			history.push("/login");
		}
	}

  return (
    <nav className="navbar bg-light px-5 py-4">
      <div className="container-fluid">
        <Link class="navbar-brand" to={"/login"}>
          <img
            src="https://img.icons8.com/ios/50/000000/star-wars.png"
            alt=""
            className="d-inline-block align-text-top"
          />
        </Link>
        <Link to="/login">
          <button className="btn btn-info">Login</button>{store.auth ? (<button className="btn btn-primary dropdown-toggle" onClick={handleLogout}>Logout</button>):null}
        </Link>
        <Link to="/signup">
            <button className="btn btn-secondary">Register</button>{" "}
          </Link>
          <Link to="/login"><button type="button" class="btn btn-danger">Logout</button>{store.auth ? (<button className="btn btn-primary dropdown-toggle" onClick={handleLogout}>Logout</button>):null}</Link>
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
