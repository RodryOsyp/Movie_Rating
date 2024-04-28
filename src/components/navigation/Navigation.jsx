import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Navigation.module.css";
import Hero from "../Hero/Hero";

const Navigation = () => {
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
    return pathname === `${itemName}` ? `${styles.active}` : ''
  };
  const { pathname } = useLocation();
  return (
    <ul className={styles.nav}>
      <li className={styles.img}>
        <img
          src="https://archive.org/download/png-movie-ticket-movie-ticket-1-950/png-movie-ticket-movie-ticket-1-950.png"
          alt=""
        />
      </li>
      <div className={styles.header}>
        <li>
          <NavLink
            exact="true"
            to={"/"}
            className={getNavLinkClassName("/")}
            onClick={() => handleNavItemClick("Home")}
          >
            Home
          </NavLink>
            
        </li>
        <li>
          <NavLink
            to={"/film"}
            className={getNavLinkClassName("/film")}
            onClick={() => handleNavItemClick("Movie")}
          >
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={getNavLinkClassName("/about")}
            onClick={() => handleNavItemClick("About")}
          >
            About us
          </NavLink>
        </li>
        <li>
          <button className={styles.searchButton} onClick={handleSearchClick}>
            <AiOutlineSearch className={styles.searchIcon} />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search..."
              className={styles.searchInput}
            />
          )}
        </li>
      </div>
    </ul>
  );
};

export default Navigation;
