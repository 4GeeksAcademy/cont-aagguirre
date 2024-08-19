import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const AddContact = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="container">
      <h1>Add a new contact</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control"  placeholder="Full Name" id="name" aria-describedby="fullName" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email </label>
          <input type="email" className="form-control"  placeholder="Enter email" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Phone</label>
          <input type="number" className="form-control" placeholder="Enter phone" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Addres</label>
          <input type="text" className="form-control" placeholder="Enter address" id="exampleInputPassword1" />
        </div>
        
        <button  type="submit" className="btn  btn-primary">Save</button>
      </form>
      <div className="">
      <Link to="/">
      <span className="btn btn-primary btn-lg" href="#" role="button">
					Or get back to contacts 
				</span>
				</Link>
      </div>
      
    </div>
  );
}
