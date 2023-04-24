import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const AssignmentTracker = ({ modules }) => {
  return (
    <>
      {modules.map((item) => (
        <div className="col-sm-6" key={item.id}>
          <Link to={`/module/${item.id}`} className="moduleLinkCard">
            <Card id="homeCard">
              <Card.Img
                variant="top"
                src={
                  item.image instanceof FormData
                    ? URL.createObjectURL(item.image.get("image"))
                    : item.image
                }
                alt="study image"
                className="cardImgs"
              />
              <Card.Body>
                <Card.Title className="moduleItemName">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <br />
        </div>
      ))}
      <Link to={"/add/"} className="addModuleBtnLink">
        <div className="d-grid gap-2">
          <Button variant="success" size="lg">
            Add Module
          </Button>
        </div>
      </Link>
    </>
  );
};

export default AssignmentTracker;
