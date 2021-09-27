import React from "react";

export default function FooterComponent() {
  return (
    <div className="app-footer">
      <p className="footer-title">
        Made with{" "}
        <span className="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="hotpink"
            stroke="tomato"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-heart"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </span>
        <span className="rem-footer-title">by Atharva</span>
      </p>
      <p className="footer-text">
        Copyrights <span className="copyright">©️</span> statement and year
      </p>
      <p className="footer-text">Version 0.1.2P</p>
    </div>
  );
}
