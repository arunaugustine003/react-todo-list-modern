import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "#ff4d4d" : "#f40b64")};
//     font-size: 2.75rem;
//   }
//   & label i {
//     color: ${(props) => (props.invalid ? "#ff4d4d" : "#f40b64")};
//   }
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "#ff4d4d" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ff4d4d" : "white")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: white;
//     border-color: #f40b64;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} className="form-main">
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>
          Things To Do...<i className="fab fa-angellist"></i>
        </label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Items </Button>
    </form>
  );
};

export default CourseInput;
