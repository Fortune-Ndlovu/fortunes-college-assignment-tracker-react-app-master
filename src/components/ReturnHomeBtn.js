import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link, useMatch } from "react-router-dom";

const ReturnHomeBtn = () => {
  // useMatch returns a match object if the current URL matches the pattern specified as the argument
  const match = useMatch("/module/:moduleID");

  return (
    <>
      {match ? (
        <Link to={"/"} className="btn btn-sm btn-success" id="homeIconLink">
          <AiFillHome className="homeIcon" /> Return home
        </Link>
      ) : null}
    </>
  );
};

export default ReturnHomeBtn;
