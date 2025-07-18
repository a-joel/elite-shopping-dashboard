import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import './BriefUser.css'
import { Link, useNavigate } from 'react-router-dom';

// const {id} = useParams();

const id = 2;

const Card = () => {
  return (
    <>
    <div className="briefuser-card">

      <h4>DETAIL</h4>
                          <p className='username'>User Name     joel-a</p>
                          <p className='email'>Email joelvijay319@gmail.com</p>
                          <p className='name'>Name Joel. A</p>

                          <div className='buttons'>
                            <Link to={`/customer/${id}`}><button>Go</button></Link>
                          </div>
                        </div>
    </>
  )
}

function BriefUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error))
      .finally(() => setLoading(false));
  }, []);

  console.log("Users:", users);
  
  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className="main-briefuser-container">
          <h1>Elite shopping loyal consumers</h1>
                <div className="briefuser-container">
                        {
                                users.map(u => (
                                    <div key={u.id} className="briefuser-card">
                                        <h4>DETAIL</h4>
                          <p className='username'>User Name {u.username}</p>
                          <p className='email'>Email {u.email}</p>
                          <p className='name'>Name {u.name.firstname} {u.name.lastname}</p>

                          <div className='buttons'>
                            <button onClick={() => Navigate(`/customers/${u.id}`)}>Go</button>
                          </div>
                                    </div>
                                ))
                        }
                </div>
        </div>
        <hr />
    </div>
  )
}

export default BriefUser
