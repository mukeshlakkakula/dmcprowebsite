import React from "react";
import "./index.css";
const User = () => {
  return (
    <div className="userFullContainer">
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div>
            <img
              src="https://i.pinimg.com/564x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg"
              className="card-img-top"
              style={{ objectFit: "cover", width: "100%" }}
              alt="user"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-danger fw-bold fs-3"> User</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCM82Nzia7KDCRPgOr7jf4GCfnnH-xjNylZNNd6GKKOLYueg/viewform?usp=sf_link"
                className="btn btn-success"
              >
                User
              </a>
              <a href="#" className="btn btn-primary">
                Explore more...
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://i.pinimg.com/564x/7d/67/de/7d67deb7b342eeebaac145df2538bc02.jpg"
            className="card-img-top"
            style={{ objectFit: "cover", width: "100%" }}
            alt="user"
          />
          <div className="card-body">
            <h5 className="card-title  text-danger fw-bold fs-3">Employee</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCM82Nzia7KDCRPgOr7jf4GCfnnH-xjNylZNNd6GKKOLYueg/viewform?usp=sf_link"
                className="btn btn-success"
              >
                Employee
              </a>
              <a href="#" className="btn btn-primary">
                Explore more...
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://i.pinimg.com/736x/e0/6f/93/e06f937171a579e3d027adb99e15fdbf.jpg"
            className="card-img-top"
            style={{ objectFit: "cover", width: "100%" }}
            alt="user"
          />
          <div className="card-body">
            <h5 className="card-title  text-danger fw-bold fs-3">Creator</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCM82Nzia7KDCRPgOr7jf4GCfnnH-xjNylZNNd6GKKOLYueg/viewform?usp=sf_link"
                className="btn btn-success"
              >
                Creator
              </a>
              <a href="#" className="btn btn-primary">
                Explore more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
