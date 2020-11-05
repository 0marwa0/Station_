import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;
export const CustomInput = styled(Input)`
  border-radius: 7px;
  border: 1px solid #e1e4e8;
  color: ${(props) => (props.gray ? " var(--darkGray)" : "black")};
  background-color: ${(props) => (props.gray ? "var(--lighterGray)" : "white")};
`;
export const CustomInputArea = styled(TextArea)`
  border-radius: 7px;
  border: 1px solid #e1e4e8;
  color: ${(props) => (props.gray ? " var(--darkGray)" : "black")};
  background-color: ${(props) => (props.gray ? "var(--lighterGray)" : "white")};
`;
export const ButtonStyled = styled(Button)`
  background-color: ${(props) =>
    props.Main ? "var(--yellow)" : "var(--lightGray)"};
  border-radius: ${(props) => (props.extra ? "2px" : "7px")};
  border: ${(props) => (props.Main ? "none" : "1px solid var(--lighterGray)")};
  display: flex;
  gap: 5px;

  width: ${(props) => (props.extra ? "80px" : "auto")};
  height: ${(props) => (props.extra ? "110px" : "auto")};
  padding: ${(props) =>
    props.Main ? "0 15px" : props.extra ? "0 50px" : "0 4px 0 9px"};
  align-items: center;
  text-align: center;
  justify-content: center;
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
  padding: 20px 40px;
`;
export const ModleHeader = styled.div`
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: space-between;

  border-radius: 7px;
  font-size: 20px;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
`;
export const ButtonStyledModle = styled(Button)`
  height: 40px;
  background-color: ${(props) =>
    props.Main ? "var(--yellow)" : "var(--lightGray)"};
  border-radius: ${(props) => (props.extra ? "2px" : "7px")};
  border: ${(props) => (props.Main ? "none" : "1px solid var(--lighterGray)")};
  display: flex;
  gap: 5px;

  width: 100px;

  padding: 0;
  align-items: center;
  text-align: center;
  justify-content: center;
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
`;
