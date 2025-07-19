import React from 'react'
import { Link } from 'react-router-dom'
import './CrudParent.css'
function CrudParent() {
  return (
    <div>
      <hr/>
      <div className="crud-main-container">
        <h2>Perform CRUD Operations here,</h2>
        <div className="crud-container">
          <Link to={'/crud'}><button>GO...</button></Link>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default CrudParent
