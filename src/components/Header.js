import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";

const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Container className="navbar">
          <Link to={"/"} className="logo">
            <BsFillJournalBookmarkFill className="book" />
            Module Tracker
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/studyTips"} className="link">
                Study Tips
              </Link>
              <Link to={"/about"} className="link">
                About Us
              </Link>
            </Nav>

            <form className="form-inline my-2 my-lg-0">
              <div className="input-group align-items-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                  >
                    <FcSearch className="searchIcon" />
                  </button>
                </div>
              </div>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
