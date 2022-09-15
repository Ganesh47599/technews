import React from "react";
import instagram from "./instagram.png";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="containe">
          <div className="row">
            <div className="footer-col">
              <h4>technews</h4>
              <ul>
                <li>
                  <a>
                    <NavLink to="/about">About</NavLink>
                  </a>
                </li>
                <li>
                  <NavLink to="/staff">Our staff</NavLink>
                </li>

                <li>
                  <NavLink to="/privacy">privacy</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  {" "}
                  <NavLink to="/faq">faq</NavLink>
                </li>
                <li>
                  <NavLink to="/giveway">giveway</NavLink>
                </li>
                <li>
                  <NavLink to="/others">others</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online phone</h4>
              <ul>
                <li>
                  <NavLink to="/address">address</NavLink>
                </li>
                <li>
                  <NavLink to="/type">type</NavLink>
                </li>
                <li>
                  <NavLink to="/payment">payment</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <ul>
                  <li>
                    {" "}
                    <NavLink to="/instagram">instagram</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/facebook">facebook</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/youtube">youtube</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
