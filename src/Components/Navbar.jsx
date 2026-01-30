import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" to="/">eshopper</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	          
	          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
	          <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
	          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
			  <li className="nav-item"><Link to="/admin-home" className="nav-link">Admin</Link></li>
	          <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span class="icon-shopping_cart"></span>[0]</Link></li>


			  {
				localStorage.getItem("login")?
				<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Deepak Gupta
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				  <a class="dropdown-item" href="/profile">Profile</a>
				  <a class="dropdown-item" href="/cart">Cart</a>
				  <a class="dropdown-item" href="/logout">Logout</a>
				</div>
			  </li>:
			    <li className="nav-item"><Link to="/login" className="nav-link">login</Link></li>
			 }


	        </ul>
	      </div>
	    </div>
	  </nav>
	  </>
  )
}
