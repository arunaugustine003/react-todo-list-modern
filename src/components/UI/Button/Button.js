// import styled from "styled-components";

import styles from "./Button.module.css";
// const Button = styled.button`
//   min-width: 50%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #f40b64;
//   color: white;
//   background: #f40b64;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (max-width: 768px) {
//     width: 10%;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #db0a5a;
//     border-color: #db0a5a;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
