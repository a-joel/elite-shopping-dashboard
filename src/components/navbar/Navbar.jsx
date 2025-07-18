import { useState } from 'react'
import { ShoppingCart, SquareMenu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
        
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  
  return (
    <div>
      <div className="navbar-main-container">
        <div className="navbar-container">

          <div className="nav-heading">
            <h1 className="nav-heading" >Customers Dashboard</h1>
          </div>

          <div
          className={`toggle-menu ${isOpen ? 'active' : ''}`}
           onClick={toggleMenu}
          >
            <SquareMenu 
            size={45}
            />
          </div>

          <div
          className={`nav-links ${isOpen ? 'active-nav-links' : ''}`}
          >
            <Link to={'/'}>Home</Link>
            <Link to={'/customers'}>Customers</Link>
            <Link to={'/reviews'}>Reviews</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
