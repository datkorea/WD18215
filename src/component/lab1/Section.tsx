import React from "react";
function Section() {
    return (
      <div className="Section">
        <div className="card">
          <div className="content">
            <h1>What is Lorem Ipsum?</h1>
            <div className="text">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution...
              </p>
              <div className="text2">
                <p>May 20</p>
                <p className="text3">Read more</p>
              </div>
            </div>
          </div>
          <div className="img1">
            <img src="/src/component/lab1/img/section.png" alt="" />
          </div>
        </div>
      </div>
    );
}

export default Section;
