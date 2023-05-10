import React, { useState } from "react";

function Form() {
   
  const [name, setname] = useState("");
//   const [fullname, setfullname] = useState([]);
  const [number, setnumber] = useState("");
//   const [fullnumber, setfullnumber] = useState([]);
  const [textarea, settextarea] = useState("");
//   const [fulltextarea, setfulltextarea] = useState([]);
  const [selectoption, setselectoption] = useState("");
//   const [fullselectoption, setfullselectoption] = useState([]);

const [allEntry,setAllEntry]=useState([]);

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
    setselectoption(event.target.value);
  };

  function handlesubmit(e) {
   e.preventDefault();
   const newentry={name:name,number:number,textarea:textarea,selectoption:selectoption};

   setAllEntry([...allEntry,newentry]);
  

//    setfullname([...fullname,newentry]);
//    setfullnumber([...fullnumber,entryy]);
//    setfulltextarea([...fulltextarea,entryyy]);
//    setfullselectoption([...fullselectoption,entryyyy]);
  }

 

  return (
    <>
      <div className="form">
        <h1>Registration Form</h1>
        <form id="forms" onSubmit={handlesubmit}>
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
            rows="4"
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
          <option value="Course"></option>
            <option value="Mtech">Mtech</option>
            <option value="MCA">MCA</option>
            <option value="Btech">Btech</option>
            <option value="BCA">BCA</option>
          </select>
          <br />
          <button type="submit"  >
            Submit
          </button>
        </form>
      </div>
     <div >
     {
        allEntry.map((curElee)=>{
            return (
                <>
                <div id="another">
                    <p><b>Name is :</b>{curElee.name}</p>
                    <p><b>number is :</b>{curElee.number}</p>
                    <p><b>feedback is:</b>{curElee.textarea}</p>
                    <p><b>Course:</b>{curElee.selectoption}</p>

                </div>
                </>
            )
        })
     }
     </div>

     
    </>
  );
}

export default Form;
