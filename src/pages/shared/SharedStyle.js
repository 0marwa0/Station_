import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
export const CustomInput = styled(Input)`
  border-radius: 7px;
  color: ${(props) => (props.gray ? " var(--darkGray)" : "black")};
  background-color: ${(props) => (props.gray ? "var(--lightGray)" : "white")};
`;
export const ButtonStyled = styled(Button)`
  background-color: ${(props) =>
    props.Main ? "var(--yellow)" : "var(--lightGray)"};
  border-radius: 7px;
  border: ${(props) => (props.Main ? "none" : "1px solid var(--lighterGray)")};
  display: flex;
  gap: 5px;
  padding: ${(props) => (props.Main ? "0 15px" : "0 8px")};
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.Main ? "var(--yellow)" : "var(--lightGray)"};
    color: black;
  }
  &:focus {
    background-color: ${(props) =>
      props.Main ? "var(--yellow)" : "var(--lightGray)"};
    color: black;
  }
  height: 30px;
`;
export const InputLable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
export const ModleFooter = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  marign-top: 5px;
  padding: 20px;
`;
export const ModleHeader = styled.div`
  display: flex;
  gap: 10px;
  height: 60px;
  border-radius: 7px;
  font-size: 20px;
  padding-top: 20px;
  padding-left: 40px;
`;
