import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CrudOperation.css'
function CrudOperations() {
return (
        <div>
                <div className="form-container align-items-center container d-flex flex-column">
                        <h4>Here we go</h4>
                        <form action="">
                                <input type="text" className="form-control my-5" style={{height:'70px'}} placeholder="Enter name" required />
                                <input type="text" className="form-control my-5" style={{height:'70px'}} placeholder="Enter Email" required />
                                <input type="text" className="form-control my-5" style={{height:'70px'}} placeholder="Enter Age" required />

                                <button className='btn btn-success'>Submit</button>
                        </form>
                </div>
        </div>
)
}

export default CrudOperations
