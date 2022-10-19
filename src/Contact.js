import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const contacts = useSelector((state) => state);

  console.log(contacts);
  const dispatch = useDispatch();
  const [addFormData, setAddFormData] = useState({
    id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  let navigate = useNavigate(); 
  const routeChange = (id) =>{ 
    let path =  `/edit/${id}` 
    navigate(path);
  }



  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    setAddFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };
  return (
    <div className="App">
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
        <button type="submit">Add</button>
      </form>
      <div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0
              ? contacts.map((contact, id) => (
                  <tr>
                    <td>{contact.fullName}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>
                    <td>
                      <button onClick={()=>routeChange(id)}>Edit</button>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
