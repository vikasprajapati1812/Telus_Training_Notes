// Task 2 -
// Create a form with the following fields: Name, Password, Email, and Phone Number. Use a single state to manage all these fields. When the form is submitted, display the values in the following
// Display Details  in this format.
// Name :
// Email:
// Phone No :
// Education

import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Education: "",
  });
  const TakingOutData = (e) => {
    //   console.log(e.target);
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const DisplayData = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      Name: "",
      Email: "",
      Phone: "",
      Education: "",
    });
  };
  return (
    <div>
      <div>
        <h1>Form Data Representing :</h1>
        <h3>Name: {formData.Name}</h3>
        <h3>Email: {formData.Email}</h3>
        <h3>Phone No: {formData.Phone}</h3>
        <h3>Education: {formData.Education}</h3>
      </div>
      <form onSubmit={DisplayData}>
        <label htmlFor="Name">Name :</label>
        <input
          id="Name"
          type="text"
          value={formData.Name}
          onChange={TakingOutData}
        />

        <label htmlFor="Email">Email :</label>
        <input
          id="Email"
          type="text"
          value={formData.Email}
          onChange={TakingOutData}
        />

        <label htmlFor="Phone">Phone No:</label>
        <input
          id="Phone"
          type="number"
          value={formData.Phone}
          onChange={TakingOutData}
        />
        <label htmlFor="Education">Education :</label>
        <input
          id="Education"
          type="text"
          value={formData.Education}
          onChange={TakingOutData}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
