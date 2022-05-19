import styled from "@emotion/styled";
import React from "react";

const StyledButton = styled.button({
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  margin: "2rem auto 0.5rem auto",
  backgroundColor: "#f5a142",
  color: "white",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  padding: "0.3rem 1rem",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#e68d29",
  },
});

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;
