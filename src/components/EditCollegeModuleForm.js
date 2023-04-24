import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import NotesTracker from "./NotesTracker";

const EditCollegeModuleForm = ({ modules, onEdit }) => {
  // State variables used to store different values for different form fields the intial values are empty strings or array
  const [name, setName] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDateGivenOut, setAssignmentDateGivenOut] =
    useState("");
  const [assignmentDateTimeGivenDue, setAssignmentDateTimeGivenDue] =
    useState("");
  const [grade, setGrade] = useState("");
  const location = useLocation();
  // Assigning the current location or empty array as the initial value
  const [notes, setNotes] = useState(location.state.notes || []);
  // UseParams to access the URL parameters and extract the moduleID parameter.
  const urlParameters = useParams();

  // Use navigate to navigate to different roots within the application.
  const navigate = useNavigate();

  // We are using the find method to search the modules array for a module with an id that exactly matches the value of the moduleID URL parameter.
  const moduleToEdit = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  // Define moduleToDisplay as a state variable
  const [moduleToDisplay, setModuleToDisplay] = useState(moduleToEdit);

  // Several event handlers to call when different form fields are changed.
  // These event handlers are used to update the state variables with the new values entered by the user.
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0]; // Get the uploaded image file
    setUserImage(imageFile); // Update the userImage state variable with the new image file

    const formData = new FormData(); // Create a new FormData object
    formData.append("image", imageFile); // Append the image file to the FormData object

    // Update the moduleToDisplay object with the new image source
    setModuleToDisplay({
      ...moduleToDisplay,
      image: formData
    });
  };

  const handleAssignmentNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleAssignmentDateGivenOutChange = (e) => {
    setAssignmentDateGivenOut(e.target.value);
  };

  const handleAssignmentDateTimeGivenDueChange = (e) => {
    setAssignmentDateTimeGivenDue(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  // handleAddNote function called when we want to add a note to the notes array.
  // setNotes is used to update the notes state variable.
  const handleAddNote = () => {
    setNotes([...notes, ""]);
  };

  // handleNoteChange function called when the user types in a new note.
  // The function take an event object as an argument AND an index which specifies which note the user is currently editing.
  const handleNoteChange = (e, index) => {
    const newNotes = [...notes];
    newNotes[index] = e.target.value;
    setNotes(newNotes);
  };

  // Updating the notes state variable to remove the note at the specified index
  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  // The handleSubmit function is an event handler for the form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", userImage);

    // Perform the actual upload using fetch or any other library

    // Reset the selectedImage state to null after successful upload
    setUserImage(null);
    /**
     * updatedModule with properties for each form field.
     * The values for each form field are set to the corresponding values from the state variables if they exist, or
     * set to the corresponding values from the moduleToEdit objectif the state variable is falsy like an empty string.
     */
    const updatedModule = {
      id: moduleToEdit.id,
      name: name || moduleToEdit.name,
      image: userImage ? formData : moduleToEdit.image,
      assignmentName: assignmentName || moduleToEdit.assignmentName,
      assignmentDateGivenOut:
        assignmentDateGivenOut || moduleToEdit.assignmentDateGivenOut,
      assignmentDateTimeGivenDue:
        assignmentDateTimeGivenDue || moduleToEdit.assignmentDateTimeGivenDue,
      grade: grade || moduleToEdit.grade,
      notes: notes || moduleToEdit.notes
    };

    // The onEdit method is used to update the state variables with the new values entered by the user.
    onEdit(updatedModule);

    // The navigate method is used to navigate to a new root that displays the updated collge module and its current state as a prop.
    navigate(`/module/${updatedModule.id}`, {
      state: { notes: updatedModule.notes }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="image">Module Image:</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
        />
        {/* Render other form fields and submit button */}
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="moduleName">Module Name:</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.name}
          name="moduleName"
          onChange={handleNameChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentName">Assignment Name:</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.assignmentName}
          name="assignmentName"
          onChange={handleAssignmentNameChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentDateGivenOut">
          Assignment Date Given Out:
        </label>
        <input
          type="date"
          className="form-control"
          defaultValue={moduleToEdit.assignmentDateGivenOut}
          name="assignmentDateGivenOut"
          onChange={handleAssignmentDateGivenOutChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentDateTimeGivenDue">
          Assignment Date and Time Due:
        </label>
        <input
          type="datetime-local"
          className="form-control"
          defaultValue={moduleToEdit.assignmentDateTimeGivenDue}
          name="assignmentDateTimeGivenDue"
          onChange={handleAssignmentDateTimeGivenDueChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="theAssignmentGrade">Assignment Grade:</label>
        <input
          type="text"
          className="form-control"
          placeholder="0 %"
          defaultValue={moduleToEdit.grade}
          name="assignmentGrade"
          onChange={handleGradeChange}
        />
      </div>
      <br />
      <NotesTracker
        notes={notes}
        onAddNote={handleAddNote}
        onNoteChange={handleNoteChange}
        onDeleteNote={handleDeleteNote}
      />
      <br />
      <br />
      <button
        type="submit"
        className="btn btn-success"
        id="updateCollegeModuleBtn"
      >
        Update Module
      </button>
    </form>
  );
};

export default EditCollegeModuleForm;
