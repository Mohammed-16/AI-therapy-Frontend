import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        <h2>
              Your Journey to Mental Wellness Begins Here.
                <span></span>
              </h2>
          <p>
          Personalized online therapy at your fingertips
          </p>
          <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
              >
                CHAT NOW
              </a>{" "}
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
