import React, { useState } from "react";

function Form() {
   
  const [name, setname] = useState("");
  const [fullname, setfullname] = useState("");
  const [number, setnumber] = useState("");
  const [fullnumber, setfullnumber] = useState("");
  const [textarea, settextarea] = useState("");
  const [fulltextarea, setfulltextarea] = useState("");
  const [selectoption, setselectoption] = useState("");
  const [fullselectoption, setfullselectoption] = useState("");

  const handleChange = (event) => {
    setname(event.target.value);
  };

  const handleChangenumber = (event) => {
    setnumber(event.target.value);
  };

  const handleChangetextarea = (event) => {
    settextarea(event.target.value);
  };

  const handleChangeselect = (event) => {
    setselectoption                                                                                                                                                                                                                                             (event.target.value);
  };

  function handlesubmit() {
    setfullname(name);
    setfullnumber(number);
    setfulltextarea(textarea);
    setfullselectoption(selectoption);
  }

 

  return (
    <>
      <div className="form">
        <h1>Registration Form</h1>
        <form id="forms">
          <label>Enter your name:</label>
          <br />
          <input type="text" value={name} onChange={handleChange} />
          <br />

          <label> Mobile number:</label>
          <br />

          <input type="number" value={number} onChange={handleChangenumber} />
          <br />
          <label>Enter the feedback:</label>
          <br />
          <textarea
            rows="10"
            cols="30"
            value={textarea}
            onChange={handleChangetextarea}
          ></textarea>
          <br />
          <label>Enter your course:</label>
          <select id="course"
          value={selectoption}
          onChange={handleChangeselect}
          >select course
            <option value="Mtech">Mtech</option>
            <option value="MCA">MCA</option>
            <option value="Btech">Btech</option>
            <option value="BCA">BCA</option>
          </select>
          <br />
          <button type="button" onClick={handlesubmit} >
            Submit
          </button>
        </form>
      </div>
      <div id="another">
        <h1>Name is :{fullname}</h1>
        <h1>Number is:{fullnumber} </h1>
        <h1>Feedback is:{fulltextarea}</h1>
        <h1>Course is :{fullselectoption}</h1>
      </div>
      {/* <Container/> */}

     
    </>
  );
}

export default Form;
