import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { ButtonStyled, ButtonStyledModle } from "../shared/SharedStyle";
export const CustomButton = ({
  lable,
  children,
  Main,
  filter,
  onOpen,
  pageTitle,
  fun,
  undo,
  extra,
}) => {
  return (
    <ButtonStyled
      Main={Main}
      extra={extra}
      undo={undo}
      onClick={Main ? onOpen : fun}
    >
      {children}
      {lable}
      {filter ? <RiArrowDownSFill color="var(--lighterGray)" /> : ""}
    </ButtonStyled>
  );
};
export const CustomModleButton = ({ children, Main, fun, extra }) => {
  return (
    <ButtonStyledModle Main={Main} extra={extra} onClick={fun}>
      {children}
    </ButtonStyledModle>
  );
};
