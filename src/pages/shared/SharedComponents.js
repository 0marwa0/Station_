import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { ButtonStyled } from "../shared/SharedStyle";
export const CustomButton = ({
  lable,
  children,
  Main,
  filter,
  onOpen,
  pageTitle,
  fun,
}) => {
  return (
    <ButtonStyled Main={Main} onClick={Main ? onOpen : fun}>
      {children}
      {pageTitle === "Resources"
        ? (lable = "Upload")
        : pageTitle === "File Uploader"
        ? (lable = "Upload")
        : lable}
      {filter ? <RiArrowDownSFill color="var(--lighterGray)" /> : ""}
    </ButtonStyled>
  );
};
export const CustomModleButton = ({ children, Main, fun }) => {
  return (
    <ButtonStyled Main={Main} onClick={fun}>
      {children}
    </ButtonStyled>
  );
};
