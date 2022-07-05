import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Editform= () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
 useEffect(() => {
  
setAddFormData({fullName: currentContact.fullName,
  address: currentContact.address,
  phoneNumber: currentContact.phoneNumber,
  email: currentContact.email,})

 }, [currentContact])

 const handleAddFormChange = (e) => {
  setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
};

const handleAddFormSubmit = (e) => {
  e.preventDefault();
  const newContact = {
    id: currentContact.id,
    fullName: addFormData.fullName,
    address: addFormData.address,
    phoneNumber: addFormData.phoneNumber,
    email: addFormData.email,
  };
  dispatch({ type: "UPDATE_CONTACT", payload: newContact });
  setAddFormData({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  navigate(`/`)
};

console.log(currentContact)

  return (
    <div>
     <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          value={addFormData.fullName}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          value={addFormData.address}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter a phone number..."
          value={addFormData.phoneNumber}
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          value={addFormData.email}
          onChange={handleAddFormChange}
        />
        <button>UPDATE</button>
      </form>
    </div>
  )
}

export default Editform
