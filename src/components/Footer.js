import React from "react";
import { Link } from "react-router-dom";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <CDBBox className="footer">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <Link to={"/"} className="d-flex align-items-center text-dark">
                <span
                  className="h5 font-weight-bold"
                  style={{ color: "#145B15", textDecoration: "none" }}
                >
                  {" "}
                  <BsFillJournalBookmarkFill className="book" />
                  Module Tracker
                </span>
              </Link>
              <p className="my-3" style={{ width: "250px", color: "#145B15" }}>
                We are helping folks manage their college modules more
                efficiently.
              </p>
              <CDBBox display="flex" className="mt-4" id="footer-icons">
                <CDBBtn flat>
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5" style={{ color: "#145B15" }}>
            &copy; Module Tracker, 2023. All rights reserved.
          </small>
        </CDBBox>
      </CDBBox>
    </footer>
  );
};

export default Footer;
