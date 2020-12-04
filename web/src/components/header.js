import { Link } from 'gatsby'
import React, { useState } from 'react'
import { cn } from '../lib/helpers'
import { Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './header.module.css'
import Accordion1 from "../components/headeraccordion/Accordion";
import mystyles from './header.scss'
import logo from '../images/logo-unilegal-llc.png'
import logomob from '../images/logo-unilegal-llcmob.png'



const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown id="headerdropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle id="headerdropdown" caret>
        Products
        </DropdownToggle>
      <DropdownMenu>
        <Link to='/glass-protect/' header>Glass Protect</Link>
      </DropdownMenu>
    </Dropdown>
  );
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, siteImage }) => (
    <div className={styles.root}>
        <div class="mobile-container">
        <div class="content">
            <nav>
                <input type="checkbox" id="hamburger1" />
                <label for="hamburger1"></label>
                <ul class="nav-links">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about-us/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/profile-of-lawyers/'>Profile of Lawyers</Link>
            </li>
            <li>
              <Link to='/blogs/'>Blogs</Link>
            </li>
                    <li>
                        <Link to='/contact/'>Contact Us</Link>
                    </li>
                </ul>
                </nav>
                <div class="logodiv">
                <Link to='/'>
                    <img className="logo"
                            src={logomob}
                            alt="portomono_logo"
                            height="720"
                            width="2500"
                        /></Link>
                </div>
            </div>
            </div>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to='/'>
          <img className="logo"
                        src={logo}
          alt="portomono_logo"
        /></Link>
      </h1>


      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <div className="headerbtn">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-us/'>About Us</Link>
            </li>
            <li>
              <Link to='/profile-of-lawyers/'>Profile of Laywers</Link>
            </li>
            <li>
              <Link to='/blogs/'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact/'>Contact Us</Link>
            </li>
          </ul>
          </div>
      </nav>
    </div>
  </div>
)

export default Header
