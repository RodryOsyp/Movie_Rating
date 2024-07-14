import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { pathname } = useLocation();
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getNavLinkClassName = (itemName) => {
    return pathname === `${itemName}` ? `${styles.active}` : "";
  };
  console.log("cgvjhbkjn");
  const navArray = [
    {
      to: "/",
      class: getNavLinkClassName("/"),
      onClick: () => handleNavItemClick("Home"),
      title: "Home"
    },
    {
      to: "/film",
      class: getNavLinkClassName("/film"),
      onClick: () => handleNavItemClick("Movie"),
      title: "Movie"
    },
    {
      to: "/about",
      class: getNavLinkClassName("/about"),
      onClick: () => handleNavItemClick("About"),
      title: "About"
    },
  ];

  return (
    <ul className={styles.nav}>
      <li className={styles.img}>
        <img
          src="https://archive.org/download/png-movie-ticket-movie-ticket-1-950/png-movie-ticket-movie-ticket-1-950.png"
          alt=""
        />
      </li>
      <div className={styles.header}>
        {navArray.map((e, index) => (
          <li key={index}>
            <NavLink to={e.to} className={e.class} onClick={e.onClick}>
              {e.title}
            </NavLink>
          </li>
        ))}
        <li>
          {isSearchOpen && (
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search..."
              className={styles.searchInput}
            />
          )}
          <button className={styles.searchButton} onClick={handleSearchClick}>
            <AiOutlineSearch className={styles.searchIcon} color="white" />
          </button>
        </li>
      </div>
    </ul>
  );
};

export default Navigation;
