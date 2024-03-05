import React from "react";
function CardLatest() {
  return (
    <div className="card">
      <div className="content">
        <h2>long established</h2>
        <div className="text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div className="text2">
            <p>May 20th 2020</p>
            <p className="text3">Read more</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/src/component/lab1/img/b6b51422cb62ed996667e01bf108ab96.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default CardLatest;
