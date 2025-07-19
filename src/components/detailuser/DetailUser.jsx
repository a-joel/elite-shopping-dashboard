import React from "react";
import "./DetailUser.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function DetailUser() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);
  return (
    <div>
      {user ? (
        <div className="user-card-container">
          <h1 className="card-title">User Profile</h1>

          <div className="card-section">
            <h2 className="section-title">Personal Information</h2>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Full Name:</strong> {user.name.firstname}{" "}
              {user.name.lastname}
            </p>
          </div>

          <div className="card-section">
            <h2 className="section-title">Contact Details</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}{" "}
              {/* Assuming you have a phone field based on earlier data */}
            </p>
          </div>

          <div className="card-section">
            <h2 className="section-title">Address</h2>
            <p>
              <strong>Street:</strong> {user.address.number}{" "}
              {user.address.street}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
            <p>
              <strong>Zip Code:</strong> {user.address.zipcode}{" "}
              {/* Assuming you have a zipcode */}
            </p>
            <p>
              <strong>Geolocation:</strong> Lat: {user.address.geolocation.lat},
              Long: {user.address.geolocation.long} {/* Assuming geolocation */}
            </p>
          </div>

          {/* You might not want to display password like this, but including for completeness based on your data */}
          {user.password && (
            <div className="card-section password-warning">
              <h2 className="section-title">Security Info</h2>
              <p>
                <strong>Password:</strong> ******** (Not displayed for security)
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
