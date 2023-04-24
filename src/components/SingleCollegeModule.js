import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteModule from "./DeleteModule";

const SingleCollegeModule = ({ modules, onDelete }) => {
  // Using the useParams hook to acess the URL parameters in question.
  const urlParameters = useParams();

  /**
   * In this case the moduleID parameter is extracted from the URL and assigned to the variable urlParameters
   * We then use the find method to search the modules array for a module with the id that exactly
   * matches the value of the moduleID URL parameter, if a match is found we assign the value to the moduleToDisplay variable
   */
  let moduleToDisplay = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  /**
   * When this component is rendered it will display information about the a specific college module.
   * based on the value of the moduleID URL parameter.
   * The user can view this information and use the edit btn to modify the module or remove the college module.
   */
  return (
    <div>
      {
        <Card>
          <Card.Img
            variant="top"
            src={
              moduleToDisplay.image instanceof FormData
                ? URL.createObjectURL(moduleToDisplay.image.get("image"))
                : moduleToDisplay.image
            }
            alt="Module Identifier"
            className="cardImgs"
          />
          <Card.Body>
            <Card.Title className="moduleTitle">
              <h2>{moduleToDisplay.name}</h2>{" "}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Title>
                <h3>{moduleToDisplay.assignmentName}</h3>
              </Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
              Assignment Date Given Out: <br />
              {moduleToDisplay.assignmentDateGivenOut}
            </ListGroup.Item>
            <ListGroup.Item>
              Assignment Date and Time: <br />
              {moduleToDisplay.assignmentDateTimeGivenDue}
            </ListGroup.Item>
            <ListGroup.Item>
              Assignment Grade: {moduleToDisplay.grade}
            </ListGroup.Item>
            <ListGroup.Item>
              Notes:
              <ul>
                {/**
                 *  Using a conditional rendering technique to only render the moduleToDisplay.notes if it exits and is truthy
                 *  We then map over the array of notes creating a list item for each note with a unique key being the index.
                 */}
                {moduleToDisplay.notes &&
                  moduleToDisplay.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              {/*  passing the value of the notes property of the moduleToDisplay object as a prop when you navigate to the /module/${updatedModule.id} */}
              <div className="moduleEditBtn">
                <Link
                  to={`/edit/${moduleToDisplay.id}`}
                  state={{ notes: moduleToDisplay.notes }}
                  className="btn btn-sm btn-success"
                  id="editModuleBtn"
                >
                  Edit Module
                </Link>
              </div>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Danger Zone</h4>
              <h5>Delete this module</h5>
              <p>
                Once you delete a module, there is no going back. Please be
                certain.
              </p>
              <DeleteModule
                onDelete={onDelete}
                moduleToDisplay={moduleToDisplay}
              />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      }
    </div>
  );
};

export default SingleCollegeModule;
