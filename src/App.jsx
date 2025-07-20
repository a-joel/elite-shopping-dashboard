import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import BriefUser from "./components/breif-user/BriefUser";
import Review from "./components/reviews/Review";
import Footer from "./components/footer/Footer";
import DetailUser from "./components/detailuser/DetailUser";
import Company from "./components/comapany/Company";
import CrudParent from "./components/crudparent/CrudParent"
import { useSelector } from "react-redux";
import CrudOperations from "./components/crudoperations/CrudOperations";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const CrudDetailUser = () => {
  const [user, setUser] = useState(null);
  const { i } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${i}`)
      .then((response) => {
        setUser(response.data);
        setLoading(true)
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [i]);

  if(!loading) {
    return (
      <div>Loading</div>
    )
  }
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

export default function App() {
  
  const name = useSelector(state => state.users[4].username ?? '');
    console.log(`This is ${name}`);
  
  
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />{" "}
              <Hero />
              <Company />
              <CrudParent />
              <Footer />
            </>
          }
        />
        <Route path="/customers" element={<><Navbar /><BriefUser /><Review /> <Footer /></>} />

        <Route path="/reviews" element={<><Navbar /> <Hero /> <Review /> <Footer /></>} />

        <Route path="/customers/:id" element={<><Navbar /> <DetailUser /> <Footer /></>} />


<Route path="/customer/:i" element={<CrudDetailUser />} />

        <Route path="/crud" element={<><Navbar /><CrudOperations /> <Footer /></>} />
      </Routes>
    </div>
  );
}
