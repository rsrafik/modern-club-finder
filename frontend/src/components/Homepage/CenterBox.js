import React from "react";
import Category from "./Category";
import DaysOfWeek from "./DaysOfWeek";
import Vector from "../Homepage/resources/Vector.png";
import Areas from "../Homepage/resources/Areas.png";
import Dates from "../Homepage/resources/Dates.png";
import Chevron from "../Homepage/resources/Chevron.png";

const CenterBox = () => {
  const subjects = ["Coding", "Math", "Science", "English", "History"];
  const subComponents = [];
  subjects.forEach((sub) => {
    subComponents.push(<Category sub={sub} />);
  });

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const dayComponents = [];
  days.forEach((day) => {
    dayComponents.push(<DaysOfWeek day={day} />);
  });

  return (
    <div className="bg-box">
      <div style={{ display: "inline-block" }}>
        <img
          src={Vector}
          alt="Vector"
          className="mb-1"
          style={{ display: "inline-block" }}
        />
        <h2 className="subheader-font ml-1" style={{ display: "inline-block" }}>
          Name
        </h2>
      </div>

      <h3 className="commenter-font">
        (Optional)Search for a club using its name
      </h3>
      <input
        type="text"
        id="my-text-field"
        name="name"
        placeholder="Club name"
        className="mt-3 p-2 rounded-lg text-field-style"
      />

      <br />

      <div style={{ display: "inline-block" }}>
        <img
          src={Areas}
          alt="Areas"
          className="mb-1"
          style={{ display: "inline-block" }}
        />
        <h2 className="subheader-font ml-1" style={{ display: "inline-block" }}>
          Area of interests
        </h2>
      </div>

      <h3 className="commenter-font">Choose areas you're interested in</h3>
      <div style={{ display: "inline-block" }}>{subComponents}</div>

      <br />

      <div style={{ display: "inline-block" }}>
        <img
          src={Dates}
          alt="Dates"
          className="mb-2"
          style={{ display: "inline-block" }}
        />
        <h2 className="subheader-font ml-1" style={{ display: "inline-block" }}>
          Meeting Dates
        </h2>
      </div>
      <h3 className="commenter-font">Select days you're available to attend</h3>
      <div style={{ display: "inline-block" }}>{dayComponents}</div>

      <br />

      <button className="next-button transition duration-500 hover:scale-105">
        <div style={{ display: "inline-block" }}>
          <h2 style={{ display: "inline-block" }}>Find Clubs</h2>
          <img
            src={Chevron}
            alt="Dates"
            className="mb-1 ml-12"
            style={{ display: "inline-block" }}
          />
        </div>
      </button>

      <button className="all-button mt-2">Show me all clubs!</button>
    </div>
  );
};

export default CenterBox;
