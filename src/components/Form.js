import React, { useState } from "react";

function Form({ Login, error }) {
  const [details, setDetails] = useState({ name: "", age: "", email: "", phone: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Form Details</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age"> Age: </label>
          <input
            type="text"
            name="age"
            id="age"
            onChange={(e) => setDetails({ ...details, age: e.target.value })}
            value={details.age}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone"> Phone Number: </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            value={details.phone}
          />
        </div>
        <input type="submit" value="Submit" />
        <div className="form-group">
          <label htmlFor="name"> Name: {details.name} </label>
          <label htmlFor="age"> Age: {details.age} </label>
          <label htmlFor="email"> Email: {details.email} </label>
          <label htmlFor="phone"> Phone Number: {details.phone} </label>         
        </div>
        
      </div>
    </form>
  );
}
export default Form;
