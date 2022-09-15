import React from "react";
import inventory from "./inventory.json";
import "./inventory.css";
function Inventory() {
  return (
    <>
      <div className="inventory" style={{ margin: "50px" }}>
        {inventory.map((item, i) => (
          <div className="card">
            <div className="card-header">
              <h2>{item.name}</h2>
            </div>
            <div className="card-body">
              <img src={item.url} alt="" className="newsImg" />
            </div>
            <div className="card-footer">
              <p>{item.quality}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inventory;
