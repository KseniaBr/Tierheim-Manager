import styles from "../../styles/navbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPaw } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const paths = [
    { name: "Organisationen", to: "/organisationen", id: 1 },
    { name: "Abmelden", to: "/logout", id: 2 },
  ];

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const [showNavLinks, setNavLinks] = useState(true);
  const [showBurgerMenu, setBurgerMenu] = useState(false);

  const handleNavClick = () => {
    //click on burger icon => show me nav links
    if (showBurgerMenu) {
      setNavLinks(!showNavLinks);
    }
  };

  //"media queries"
  //listen to it when we drag the screen larger or smaller
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      //big screen => nav links
      setBurgerMenu(false);
      setNavLinks(true);
    } else {
      //small screen => burger icon
      setBurgerMenu(true);
      setNavLinks(false);
    }
  });

  //dependency array [] => what it should listen to
  //run at least once a mount
  //listen to it when we open the website
  useEffect(() => {
    if (window.innerWidth > 768) {
      setBurgerMenu(false);
      setNavLinks(true);
    } else {
      setBurgerMenu(true);
      setNavLinks(false);
    }
  }, []);

  useEffect(() => {
    //closes the open burger menu when click outside
    const handleClickOutside = (e) => {
      let header = document.getElementById("header");
      let clickedItem = e.target;
      if (showBurgerMenu && showNavLinks && !header.contains(clickedItem)) {
        setNavLinks(false);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [showBurgerMenu, showNavLinks]);

  return (
    <header id="header" className={styles.header}>
      {/* Pfote */}
      {currentUser?.id && (
        <div className={styles.paw}>
          <FontAwesomeIcon
            icon={faPaw}
            onClick={() => {
              navigate("/organisationen");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      )}

      {/* Nav */}
      <div className={styles.container}>
        <p>Tierheim Manager</p>
        <div className={styles.menu}>
          {currentUser?.id && showBurgerMenu && (
            <FontAwesomeIcon
              icon={showNavLinks ? faXmark : faBars}
              onClick={handleNavClick}
              className={styles.icon}
            />
          )}
          {currentUser?.id && showNavLinks && (
            <nav className={styles.nav}>
              <ul>
                {paths.map((path) => {
                  return (
                    <li key={path.id} onClick={handleNavClick}>
                      <NavLink
                        className={styles.link}
                        to={path.to}
                        style={({ isActive }) => ({
                          textDecoration: isActive ? "underline" : "none",
                        })}
                      >
                        {path.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
