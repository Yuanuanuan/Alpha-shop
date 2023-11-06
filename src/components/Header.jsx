/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as CartIcon } from "../icons/cart.svg";
import logo from "../icons/logo.svg";
import { ReactComponent as ToggleIcon } from "../icons/toggle.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <ToggleIcon />
        </label>

        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            <li className="nav-item">
              <SearchIcon />
            </li>
            <li className="nav-item">
              <CartIcon />
            </li>
            <li id="theme-toggle" className="nav-item">
              <MoonIcon />
            </li>
          </ul>
        </nav>

        <a className="header-logo-container" href="#">
          <img
            src={logo}
            alt=""
            style={{ height: "40px", objectFit: "cover" }}
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
