import { ReactComponent as List } from "../icons/list.svg";
import { Outlet, Link } from "react-router-dom";
import useTokenStore from "../hooks/useToken";

function Navigation() {
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  return (
    <>
      <nav className="Navigation d-flex justify-content-start align-items-center">
        <button className="list-button">
          <List />
        </button>

        {token == null ? (
          <button className="navigation-button">Albicla 2</button>
        ) : (
          <Link to="/">
            <button className="navigation-button">Albicla 2</button>
          </Link>
        )}

        <Link to="login">
          <button className="navigation-button">Zaloguj się</button>
        </Link>
        {token == null ? null : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
              console.log("Navigation.jsx: set token to null");
            }}
            className="navigation-button"
          >
            Wyloguj się
          </button>
        )}

        <Link to="register">
          <button className="navigation-button">Zarejestruj się</button>
        </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
