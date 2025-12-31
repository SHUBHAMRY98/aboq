// import { useState } from "react";
// import { Link } from "react-router-dom";

// import { 
//   Home, 
//   User, 
//   Settings, 
//   Mail, 
//   Phone,  
//   ChevronDown 
// } from "lucide-react"; // Icons import kiye
// import './Nav.css';
// import Logo from '../../assets/img/aboq-india-logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

// export default function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Links ke saath icons ka object
//   const links = [
//     { name: "Home", icon: <Home size={18} />, path: "/" },
//     { name: "About", icon: <User size={18} />, path: "/about" },
//     { name: "Services", icon: <Settings size={18} />, path: "/services" },
//     { name: "Contact", icon: <Mail size={18} />, path: "/contact" },
//   ];

//   const serviceItems = [
//     { name: "Website Designing",  path: "/web-design" },
//     { name: "Website Development",  path: "/web-development" },
//     { name: "Graphics Design",  path: "/graphics-design" },
//     { name: "Google Ads",  path: "/google-ads" },
//     { name: "Digital Marketnging",  path: "/digital-marketing" },
//     { name: "Social Media Marketing",  path: "/social-media-marketing" },
//     { name: "Search Engine Optimization",  path: "/search-engine-optimization" },
    
//   ];

//   return (
//     <>
//       {/* Topbar */}
//       <div className="topbar">
//         <div className="topbar-container">
//           <div className="topbar-left">
//             <a href="tel:9876543210"><Phone size={14} /> 9876543210</a>
//             <a href="mailto:abc@gmail.com"><Mail size={14} /> abc@gmail.com</a>
//           </div>
//           <div className="topbar-right">
//             <a href="#" className="fb"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a href="#" className="insta"><FontAwesomeIcon icon={faInstagram} /></a>
//             <a href="#" className="li"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//             <a href="#" className="yt"><FontAwesomeIcon icon={faYoutube} /></a>
//             <a href="#" className="tw"><FontAwesomeIcon icon={faTwitter} /></a>
//           </div>
//         </div>
//       </div>

//       <header className="main-header">
//         <div className="header-container">
//           <Link to="/" className="logo">
//   <img src={Logo} alt="Logo" />
// </Link>

//           {/* Desktop Navigation */}
//           <nav className="desktop-nav">
//             {links.map((link) => (
//               link.name === "Services" ? (
//                 <div 
//                   key={link.name} 
//                   className="nav-dropdown"
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   <button className="dropdown-trigger">
//                     {link.icon} {link.name}
//                     <ChevronDown size={16} className={isDropdownOpen ? 'rotate' : ''} />
//                   </button>
                  
//                   {isDropdownOpen && (
//                     <div className="dropdown-menu">

//                       <Link key={index} to={item.path}>
//   {item.name}
// </Link>

//     {/* {serviceItems.map((item, index) => (
//       // item ki jagah item.name likhein aur href mein item.path
//       <a key={index} href={item.path}>{item.name}</a>
//     ))} */}
//   </div>
//                     // <div className="dropdown-menu">
//                     //   {serviceItems.map((item) => (
//                     //     <a key={item} href="#">{item}</a>
//                     //   ))}
//                     // </div>
//                   )}
//                 </div>
//               ) : (
//                 <a key={link.name} href={link.path} className="nav-link">
//                   {link.icon} {link.name}
//                 </a>
//               )
//             ))}
//           </nav>

//           <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="mobile-menu">
//             {links.map((link) => (
//               link.name === "Services" ? (
//                 <div key={link.name} className="mobile-dropdown-container">
//                   <button className="mobile-link" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//                     <span className="flex-center">{link.icon} {link.name}</span>
//                     <ChevronDown size={16} />
//                   </button>
//                   {isDropdownOpen && (
//                       <div className="dropdown-menu">
//     {serviceItems.map((item, index) => (
//       // item ki jagah item.name likhein aur href mein item.path
//       <a key={index} href={item.path}>{item.name}</a>
//     ))}
//   </div>
//                   )}
//                 </div>
//               ) : (
//                 <a key={link.name} href={link.path} className="mobile-link" onClick={() => setIsMenuOpen(false)}>
//                   {link.icon} {link.name}
//                 </a>
//               )
//             ))}
//           </div>
//         )}
//       </header>
//     </>
//   );
// }





import { useState } from "react";
import { Link } from "react-router-dom";

import { 
  Home, 
  User, 
  Settings, 
  Mail, 
  Phone,  
  ChevronDown 
} from "lucide-react";

import "./Nav.css";
import Logo from "../../assets/img/aboq-india-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn, 
  faTwitter, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "About", icon: <User size={18} />, path: "/about" },
    { name: "Services", icon: <Settings size={18} />, path: "/services" },
    { name: "Contact", icon: <Mail size={18} />, path: "/contact" },
  ];

  const serviceItems = [
    { name: "Website Designing", path: "/web-designing" },
    { name: "Website Development", path: "/web-development" },
    { name: "Graphics Design", path: "/graphics-designing" },
    { name: "Google Ads", path: "/google-ads" },
    { name: "Social Media Marketing", path: "/social-media-marketing" },
    { name: "Search Engine Optimization", path: "/search-engine-optimization" },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <a href="tel:9876543210"><Phone size={14} /> 9876543210</a>
            <a href="mailto:abc@gmail.com"><Mail size={14} /> abc@gmail.com</a>
          </div>
          <div className="topbar-right">
            <a href="#" className="fb"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="insta"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="li"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="yt"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="tw"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="header-container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {links.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="nav-dropdown"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="dropdown-trigger">
                    {link.icon} {link.name}
                    <ChevronDown
                      size={16}
                      className={isDropdownOpen ? "rotate" : ""}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      {serviceItems.map((item, index) => (
                        <Link key={index} to={item.path}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} to={link.path} className="nav-link">
                  {link.icon} {link.name}
                </Link>
              )
            )}
          </nav>

          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {links.map((link) =>
              link.name === "Services" ? (
                <div key={link.name} className="mobile-dropdown-container">
                  <button
                    className="mobile-link"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="flex-center">
                      {link.icon} {link.name}
                    </span>
                    <ChevronDown size={16} />
                  </button>

                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon} {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
}
