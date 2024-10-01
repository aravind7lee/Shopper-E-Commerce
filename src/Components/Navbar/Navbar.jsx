import { useContext, useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import carticon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { FiSun, FiMoon } from 'react-icons/fi';  // Icons for light/dark mode toggle

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dropdown menu
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Toggle dark mode and update local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !darkMode); // Save user's preference
  };

  // Apply user's preferred mode on page load
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-logo">
        <Link to="/"><img className="nav-logo-img" src={logo} alt="logo" /></Link>
        <Link to="/"><p>SHOPIO</p></Link>
      </div>
      <img className="nav_dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="dropdown icon" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login-signup"><button>Login</button></Link>
        <Link to="/cart"><img src={carticon} alt="cart icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {/* Dark Mode Toggle */}
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
