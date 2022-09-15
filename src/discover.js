import React from "react";
import { discover } from "./Data";
import "./discover.css";
function Discover() {
  return (
    <>
      <section className="discover">
        <div className="containerx">
          <div className="content">
            {discover.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <h1 className="title">{val.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
