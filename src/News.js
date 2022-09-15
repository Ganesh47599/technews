import React, { useState } from "react";
import "./News.css";
import news from "./News.json";

function Readmore({ children, maxCharacterCount = 100 }) {
  const text = children;
  const [isTruncated, setisTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 100) : text;
  function toggleIsTruncated() {
    setisTruncated(!isTruncated);
  }
  return (
    <p className="has-text-left">
      {resultString}

      <span
        onClick={toggleIsTruncated}
        className="tag is-info is-small"
        style={{ color: "blue", fontSize: "20px" }}
      >
        {isTruncated ? "  Read More" : "Read less"}
      </span>
    </p>
  );
}

function News(props) {
  return (
    <>
      <h1>Our News</h1>
      <div className="news">
        {news.map((item, i) => (
          <div className="card">
            <div className="card-header">
              <h2>{item.name}</h2>
            </div>
            <div className="card-body">
              <img src={item.url} alt="" className="newsImg" />
              <p>{item.model}</p>
            </div>
            <div>
              <dl>
                <dt>Processor:</dt>
                <dd>{item.processor}</dd>
                <dt>Battery:</dt>
                <dd>{item.Battery}</dd>
              </dl>
            </div>
            <br />
            <h3>{item.price}</h3>{" "}
            <div className="card-footer">
              <h4>
                {" "}
                <Readmore className="read">{item.full}</Readmore>
              </h4>
            </div>
          </div>
        ))}
        <div className="card"></div>
      </div>
    </>
  );
}

export default News;
