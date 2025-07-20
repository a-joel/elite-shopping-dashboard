import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CrudOperation.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeEmail, deleteUser } from "../../redux/action";

function CrudOperations() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users[0]);
  const [mail, setMail] = useState("");
  const handleSubmit = (e) => {
    //e.preventdefault();
    setMail(e.target.value);
    console.log(e.target.value);
    alert("JOEL")
    
  };
  const [name, setName] = useState(users[0].email);
  console.log(name);
  return (
    <div>
      <div className="form-container container" id="form">
        <h4 style={{ textAlign: "center" }}>Here we go</h4>
        <form action="">
          <input
            type="text"
            className="form-control my-5"
            style={{ height: "70px" }}
            placeholder="Enter name"
            required
          />
          <input
            type="email"
            className="form-control my-5"
            style={{ height: "70px" }}
            placeholder="Enter Email"
            required
            onChange={(e) => dispatch(changeEmail(e.target.value))}
          />
          <input
            type="text"
            className="form-control my-5"
            style={{ height: "70px" }}
            placeholder="Enter Age"
            required
          />

          <button className="btn btn-success" onClick={() => handleSubmit()}>
            Submit
          </button>
        </form>
      </div>

      <div className="user-details">
        <h3>Create, Read, Update and Delete(CRUD)</h3>
        <div className="user-details-container">
          <table class="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User name</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th>CRUD</th>
              </tr>
            </thead>
            <tbody>
              {users.map((e, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>
                    {e.name.firstname} {e.name.lastname}
                  </td>
                  <td>
                    <button className="btn btn-primary">Create</button>
                    <Link
                      to={`/customer/${i + 1}`}
                      className="btn btn-success mx-2"
                    >
                      Read
                    </Link>
                    <a href="#form" className="btn btn-info mx-1">
                      Update
                    </a>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(dispatch(users.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CrudOperations;
