import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "react-loader-spinner";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";
import {
  ButtonStyled,
  ButtonStyledModle,
  CreateText,
  EmptyTextHolder,
} from "../shared/SharedStyle";
export const CustomButton = ({
  lable,
  children,
  Main,
  filter,
  onOpen,
  pageTitle,
  fun,
  undo,
  loading,
  extra,
}) => {
  return (
    <ButtonStyled
      Main={Main}
      extra={extra}
      undo={undo}
      loading={loading}
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

export const EmptyText = (Loading, Item) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return Loading ? (
    // <Loader
    //   type="ThreeDots"
    //   color="var(--yellow)"
    //   height={100}
    //   width={100}
    //   // timeout={6000} //3 secs
    // />
    <EmptyTextHolder>
      {" "}
      <PropagateLoader
        css={override}
        size={25}
        color={"var(--yellow)"}
        // loading={this.state.loading}
      />
    </EmptyTextHolder>
  ) : (
    <EmptyTextHolder>
      <div>
        <img src={require("../../public/images/noData.png")} />
      </div>
      <div style={{ color: "black" }}>No {Item + "s"} found</div>
      <div style={{ width: "248px" }}>
        You havent't add any {Item} yet . Tap here to add your first {Item}
      </div>

      <CreateText>
        Add New {Item.charAt(0).toUpperCase() + Item.slice(1)}
      </CreateText>
    </EmptyTextHolder>
  );
};
