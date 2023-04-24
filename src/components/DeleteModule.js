import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Destructoring the onDelete and moduleToDisplay objects
const DeleteModule = ({ onDelete, moduleToDisplay }) => {
  // Using two react useState hooks firstly with a false boolean as the initial value and secondly with a string as the initial value
  const [showForm, setShowForm] = useState(false);
  const [code, setCode] = useState("");

  // creating a navigate function so that we can use it navigate back to the app component
  const navigate = useNavigate();

  //   creating a function to handle the form submit and checks if the correct code is entered and navigate back to the app component
  let handleDelete = (e) => {
    e.preventDefault();

    if (code === "javascript-is-cool") {
      onDelete(moduleToDisplay.id);
      navigate("/");
    } else {
      alert("Invalid code, Please try again later");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="deleteModuleBtnBox">
        {/* When this btn is clicked we will redefine the initial value of the state varible to true */}
        <button
          type="button"
          className="btn btn-sm btn-danger"
          id="deleteModuleBtn"
          onClick={() => setShowForm(true)}
        >
          Delete Module
        </button>
      </div>

      {/* When the state variable is set to true the form renders*/}
      {showForm && (
        <form onSubmit={handleDelete}>
          <br />
          <label htmlFor="deleteModule">
            Please enter the code to delete the module:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="javascript-is-cool"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-sm btn-danger"
            id="certainlyDeleteModuleBtn"
          >
            Delete this {moduleToDisplay.name} Module
          </button>
        </form>
      )}
    </div>
  );
};

export default DeleteModule;
