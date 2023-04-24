import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AssignmentTracker from "./components/AssignmentTracker.js";
import NewCollegeModuleForm from "./components/NewCollegeModuleForm";
import About from "./components/About";
import StudyTips from "./components/StudyTips.js";
import SingleCollegeModule from "./components/SingleCollegeModule";
import EditCollegeModuleForm from "./components/EditCollegeModuleForm.js";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import ReturnHomeBtn from "./components/ReturnHomeBtn.js";
import peopleCoding from "./images/peopleCoding.jpg";
import codingWithLaptop from "./images/codingWithLaptop.jpg";

// Sample data for testing purposes
const sampleData = [
  {
    id: 1,
    name: "Web Dev Frameworks",
    assignmentName: "Student College Assignment Tracker",
    assignmentDateGivenOut: "2023-03-29",
    assignmentDateTimeDue: "2023-05-21T12:00",
    assignmentGrade: "0 %",
    image: peopleCoding,
    notes: [
      "Create a new entry [5marks]",
      "Update an existing entry [10marks]",
      "Delete an existing entry. However, the user will have to first enter a code/password beforethe item gets deleted [10marks]",
      "View a list of all entries (assignments, food logs, recipes). Each list item should not contain all entry details just the “title/header” of the entry. [2marks]",
      "View an individual entry [3marks]",
      "The app should be DESIGNED to be mobile-friendly. [10marks]",
      "Additional functionality/feature that complements/supports the given application. [20marks]"
    ]
  },
  {
    id: 2,
    name: "Server Side Programming",
    assignmentName: "Ecommerce Website",
    assignmentDateGivenOut: "2023-03-29",
    assignmentDateTimeDue: "2023-05-21T12:00",
    assignmentGrade: "0 %",
    image: codingWithLaptop,
    notes: [
      "List categories",
      "List products in these categories.",
      "Add a product to cart.",
      "Create an array for the cart items to be pushed into.",
      "Remove an item from the cart."
    ]
  }
];

function App() {
  // Make the sampleData a state variable so that when it changes the relevant components are also updated
  const [collegeModules, setCollegeModules] = useState(sampleData);

  // The addCollegeModule function is used to add a new college module to the collegeModules array
  const addCollegeModule = (newCollegeModule) => {
    // Check if the newCollegeModule already has an id property
    if (!newCollegeModule.id) {
      // Generate a random number between 1 and 10000 to use an id
      const randomID = Math.floor(Math.random() * 10000) + 1;

      // Add the new id property to the newCollegeModule object
      newCollegeModule.id = randomID;
    }

    // Add the newCollegeModule JS object to the collegeModules array
    setCollegeModules([...collegeModules, newCollegeModule]);
  };

  const deleteCollegeModule = (collegeModuleID) => {
    // Create a new array with the relevant college module filtered out
    let updatedCollegeModules = collegeModules.filter(
      (module) => module.id !== collegeModuleID
    );

    // Update the state variable to be this new array
    setCollegeModules(updatedCollegeModules);
  };

  // The editCollegeModule function is used to edit a college module its taking one argument which represents the updated college module object
  const editCollegeModule = (theEditCollegeModule) => {
    // creating a spanking new array based on the old array.
    let newCollegeModules = [...collegeModules];

    // iterating over the new array and checking if the id of the new array matches the id in question if so assign the object to the new arrays object, then break out of the loop.
    for (let i = 0; i < newCollegeModules.length; i++) {
      if (newCollegeModules[i].id === theEditCollegeModule.id) {
        newCollegeModules[i] = theEditCollegeModule;
        break;
      }
    }

    // Then update the state variable to be this new array of college modules
    setCollegeModules(newCollegeModules);
  };

  return (
    <Router>
      <Header />{" "}
      <div className="container-sm p-2">
        <div className="structure">
          <div className="container">
            <ReturnHomeBtn />
            <div id="appBox">
              <Routes>
                <Route path="/studyTips" element={<StudyTips />} />

                <Route path="/about" element={<About />} />

                <Route
                  path="/"
                  element={
                    <div className="row align-items-center">
                      {/* Component that renders the list of college modules */}
                      <AssignmentTracker modules={collegeModules} />
                    </div>
                  }
                />

                {/* Any path that starts with "/add/" render the SingleCollegeModule component*/}
                <Route
                  path="/add/"
                  element={
                    <NewCollegeModuleForm onSubmitHandler={addCollegeModule} />
                  }
                />

                {/* Any path that starts with "/module/" render the SingleCollegeModule component*/}
                <Route
                  path="/module/:moduleID"
                  element={
                    <SingleCollegeModule
                      modules={collegeModules}
                      onDelete={deleteCollegeModule}
                    />
                  }
                />

                {/* Any path that starts with "/edit/" render the EditCollegeModule component*/}
                <Route
                  path="/edit/:moduleID"
                  element={
                    <EditCollegeModuleForm
                      modules={collegeModules}
                      onEdit={editCollegeModule}
                    />
                  }
                />
              </Routes>
            </div>
            <ReturnHomeBtn />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
