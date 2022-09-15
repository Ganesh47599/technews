import React from "react";
import staff from "./staff.json";
import "./staff.css";
function Staff() {
  return (
    <div className="cards">
      {staff.map((item, i) => (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={item.url} alt="" />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{item.title}</strong>{" "}
            </h5>
            <h4 className="card-text">{item.role}</h4>
            <p className="card-text">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Staff;
