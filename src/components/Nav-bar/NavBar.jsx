import './NavBar.css'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {

  return (
    <div className="navbar">
        <img src= "/Assets/logo.png" alt="" className="logo" />
        <ul className='navbar-menue'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact us</li>
        </ul>

        <div className="navbar-right">
          <FaSearch />
        
        <div className="cart">
          <FaShoppingCart/>
        </div>

        <button className='sign_btn'>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar