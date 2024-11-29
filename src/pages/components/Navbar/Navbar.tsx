import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/amazon logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import cartpng from '../../../../public/images/cart.jpeg';

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: 0 }}>
      <div className="container-fluid bg-black">
        <Image src={logo} alt="Amazon Logo" height={60} width={100} />
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" href="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/Products/page">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/Screens/Contactus/page">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/Screens/Aboutus/page">
              About Us
            </Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: 650 }}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <Link
          className="text-white text-decoration-none ms-3"
          href="/Screens/Cart/page"
        >
          <Image src={cartpng} alt="Cart" width={30} height={30} /> Cart
        </Link>
      </div>
    </nav>
  );
}