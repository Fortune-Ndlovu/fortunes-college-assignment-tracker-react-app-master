import React from "react";
import { CgNotes } from "react-icons/cg";

const StudyTips = () => {
  return (
    <div>
      <h3>
        StudyTips
        <CgNotes className="studyTipsIcon"/>
      </h3>

      <ul>
        <li>
          Ask for help from your teachers, classmates, or online resources if
          you don't understand something.
        </li>
        <li>
          Study in a quiet place that is free of distraction and has good
          lighting.
        </li>
        <li>
          Plan how you best learn new information or skills and use your
          preferred learning style.
        </li>
        <li>
          Study at your best time of the day and take regular breaks with
          movement.
        </li>
        <li>
          Study actively by doing something with the information, such as
          writing, drawing, building, or creating.
        </li>
        <li>
          Set study goals for each session and reward yourself for achieving
          them.
        </li>
        <li>
          Study with a group and take practice tests to check your
          understanding.
        </li>
        <li>
          Use your own words to summarize, explain, or teach what you have
          learned
        </li>
        <li>
          Take care of yourself by eating well, sleeping enough, and staying
          hydrated.
        </li>
      </ul>
    </div>
  );
};

export default StudyTips;
