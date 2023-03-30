import React from "react";

export default function IntroAgentSingle() {
  return (
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Margaret Stone</h1>
              <span className="color-text-a">Agent Immobiliari</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-box d-flex justify-content-lg-end"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/">Agents</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Margaret Stone
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
