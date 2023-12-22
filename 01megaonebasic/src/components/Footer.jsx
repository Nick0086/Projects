import '../App.css'

import {FaFacebookF, FaLinkedinIn, FaTwitter, FaGooglePlusG, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className='p-80 bg-light'>
        <div className='container flex space-between align-item'>
          <ul className='flex social-link space-between'>
            <li><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><FaGooglePlusG /></li>
            <li><FaLinkedinIn /></li>
            <li><FaInstagram /></li>
            <li><FaPinterestP /></li>
          </ul>
          <p>© 2023 MegaOne. Made With Love By Themesindustry</p>
        </div>
      </footer>
    )
}

export default Footer;