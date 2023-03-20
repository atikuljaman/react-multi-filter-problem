import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/img/logo.png";
import ProfileModal from "../Modal/ProfileModal";
import "./Navigation.css";

const Navigation = () => {
  const [toggleTheme, setToggleTheme] = useState("dark_theme");
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleThemeHandler = () => {
    if (toggleTheme === "dark_theme") {
      setToggleTheme("light_theme");
    } else {
      setToggleTheme("dark_theme");
    }
  };

  useEffect(() => {
    document.body.className = toggleTheme;

    const gettingUsernameFromLocalStorage = () => {
      const savedUserName = localStorage.getItem("UserName");
      const username = JSON.parse(savedUserName);
      setLoggedInUsername(username);
    };

    gettingUsernameFromLocalStorage();
  }, [toggleTheme]);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="logo"
                className={
                  toggleTheme !== "dark_theme"
                    ? "logo_active img-fluid"
                    : "img-fluid"
                }
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/" className="nav_link">
                First Page Tab
              </NavLink>
              <NavLink to="second_page" className="nav_link">
                Second Page Tab
              </NavLink>
              <Nav.Link href="" className="nav_link">
                Sales
              </Nav.Link>
              <Nav.Link href="" className="nav_link">
                Flights
              </Nav.Link>
              <Nav.Link href="" className="nav_link">
                Citizens
              </Nav.Link>
              <Nav.Link href="" className="nav_link">
                Analytics
              </Nav.Link>
            </Nav>

            <div className="navbar_right">
              <div className="toggle_btn_container">
                <button className="toggle_btn" onClick={toggleThemeHandler}>
                  <div
                    className={
                      toggleTheme !== "dark_theme" ? "circle active" : "circle"
                    }
                  >
                    {toggleTheme !== "dark_theme" ? (
                      <BsFillSunFill />
                    ) : (
                      <BsMoonStarsFill />
                    )}
                  </div>
                </button>
              </div>

              <ProfileModal show={show} handleClose={handleClose} />

              {loggedInUsername ? (
                <div className="profile_dropdown_container">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown_btn"
                    >
                      Atikul Jaman
                      <IoIosArrowDown />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown_menu">
                      <div className="menu_item" onClick={handleShow}>
                        My Profile
                      </div>
                      <Dropdown.Item href="#/action-2" className="menu_item">
                        Sign out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <div className="sign_in_btn_container">
                  <NavLink to="/sign_in">
                    <button className="sign_in_btn">Sign In</button>
                  </NavLink>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
