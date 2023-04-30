import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h2>
              Your Journey to Mental Wellness Begins Here.
                <span></span>
              </h2>
              <p>Personalized online therapy at your fingertips</p>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
              >
                CHAT NOW
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
