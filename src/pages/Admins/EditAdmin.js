import React from "react";
import { InputLable } from "../shared/SharedStyle";
import { CustomModleButton } from "../shared/SharedComponents";
import { Menu, Dropdown, Button, Input } from "antd";
import { ReactComponent as DropIcon } from "../../public/images/dropdown.svg";
import { ReactComponent as Close } from "../../public/images/close.svg";
import styled from "styled-components";
import {
  option,
  data,
  SideOverlay,
  ModalFooter,
  SideModal,
  Title,
  Space,
} from "./Admin";
import "../../App.css";
import { CustomInput } from "../shared/SharedStyle";

function Index(props) {
  return (
    <SideOverlay>
      <SideModal>
        <div style={{ height: "95%" }}>
          <Title>
            <div>Edit Admin</div>
            <Close onClick={() => props.fun(false)} cursor="pointer" />
            {/* <AiOutlineClose /> */}
          </Title>
          <InputLable>
            <div style={{ fontSize: "17px" }}>Admin Info</div>
          </InputLable>
          <Space />
          <InputLable>
            Full Name
            <CustomInput
              onChange={(e) => props.handleInput(e, "name")}
              placeholder="Write admin name"
            />
          </InputLable>
          <Space />
          <InputLable>
            Username
            <CustomInput
              onChange={(e) => props.handleInput(e, "username")}
              placeholder="Write admin username"
            />
          </InputLable>
          <Space />
          <InputLable>
            Password
            <CustomInput
              placeholder="Write admin password"
              onChange={(e) => props.handleInput(e, "password")}
            />
          </InputLable>
          <Space /> <Space />
          <InputLable>
            Email
            <CustomInput
              placeholder="Write admin Email"
              onChange={(e) => props.handleInput(e, "email")}
            />
          </InputLable>
          <Space /> <Space />
          <InputLable>
            Phone
            <CustomInput
              placeholder="Write admin phone number"
              onChange={(e) => props.handleInput(e, "phone")}
            />
          </InputLable>
          <Space /> <Space />
          <InputLable>
            Branch
            <Dropdown overlay={option}>
              <Button
                style={{
                  color: "var(--darkGray)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                Choose admin branch loaction
                <DropIcon />
              </Button>
            </Dropdown>
          </InputLable>
          <Space />
          <InputLable>
            Role
            <Dropdown overlay={data}>
              <Button
                style={{
                  color: "var(--darkGray)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                Choose admin role <DropIcon />
              </Button>
            </Dropdown>
          </InputLable>
        </div>

        <ModalFooter>
          <div style={{ float: "right" }}>
            {" "}
            <CustomModleButton main extra fun={props.handleSubmit}>
              Save
            </CustomModleButton>
          </div>
        </ModalFooter>
      </SideModal>
    </SideOverlay>
  );
}

export default Index;
