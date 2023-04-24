import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCollegeModuleForm = ({ onSubmitHandler }) => {
  // Use navigate to navigate to different roots within the application.
  const navigate = useNavigate();

  // Use a ref to store the selected image file
  const imageRef = useRef(null);

  // Use state to manage input validation
  const [isNameValid, setIsNameValid] = useState(true);
  const [isImageValid, setIsImageValid] = useState(true);

  const handleFormCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If the value of the modulesName is empty, display an
    // alert message and return
    if (!e.target.modulesName.value) {
      setIsNameValid(false);
      return;
    } else {
      setIsNameValid(true);
    }

    if (!imageRef.current.files[0]) {
      setIsImageValid(false);
    } else {
      setIsImageValid(true);

      // Create a new JS object using the value of the modulesName
      let newCollegeModule = {
        name: e.target.modulesName.value,
        assignmentName: e.target.assignmentName,
        assignmentDateGivenOut: e.target.assignmentDateGivenOut,
        assignmentDateTimeDue: e.target.assignmentDateTimeDue,
        grade: e.target.grade,
        image: imageRef.current.files[0]
      };

      // "Blank out" the modulesName
      e.target.modulesName.value = "";

      // Read the contents of the selected image file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        newCollegeModule.image = event.target.result;

        // Call the onSubmitHandler function that was passed in via prop
        onSubmitHandler(newCollegeModule);
        navigate("/");
      };
      reader.readAsDataURL(newCollegeModule.image);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="modulesName" className="form-label">
           Module Name:{" "}
          </label>
          <input
            type="text"
            className={`form-control ${isNameValid ? "" : "is-invalid"}`}
            id="modulesName"
            name="modulesName"
            placeholder="Enter module name"
            onChange={() => setIsNameValid(true)} // Reset validation when input changes
          />
          <div className="invalid-feedback">Please add a module name.</div>{" "}
          {/* Add the invalid-feedback class for displaying validation error message */}
        </div>
      </div>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Module Image:{" "}
          </label>
          <input
            type="file"
            className={`form-control ${isImageValid ? "" : "is-invalid"}`}
            id="image"
            name="image"
            ref={imageRef}
            onChange={() => setIsImageValid(true)} // Reset validation when input changes
          />
          <div className="invalid-feedback">Please add a module image.</div>{" "}
          {/* Add the invalid-feedback class for displaying validation error message */}
        </div>
      </div>
      <div className="moduleAddCancelBtns">
        <button
          type="submit"
          className="btn btn-sm btn-success"
          id="addModuleBtn"
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning"
          id="cancelModuleBtn"
          onClick={handleFormCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewCollegeModuleForm;
