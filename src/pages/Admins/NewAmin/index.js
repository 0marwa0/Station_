import React from "react";
import { InputLable, ModleFooter, ModleHeade } from "../../shared/SharedStyle";
import { CustomModleButton } from "../../shared/SharedComponents";
import { Menu, Dropdown, Button, Input } from "antd";
import {
  DownOutlined,
  PropertySafetyFilled,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import "../../../App.css";
const PageWrapper = styled.div``;
const optionData = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);
const SideOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-backdrop-filter: blur(4px);
  z-index: 999999999;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.75);
`;

const SideModal = styled.div`
  position: absolute;
  top: 0;
  animation: listFade 0.6s;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
  height: 100%;
  width: 400px;
  backgorund-color: red;
  padding: 30px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
`;
function Index(props) {
  return (
    <SideOverlay>
      <SideModal>
        <Title>
          <div>Add new Admin</div>
          <AiOutlineClose onClick={() => props.fun(false)} />
        </Title>

        <InputLable>Admin Info</InputLable>
        <InputLable>
          Full Name
          <Input placeholder="Write admin name" />
        </InputLable>
        <InputLable>
          Username
          <Input placeholder="Write admin username" />
        </InputLable>
        <InputLable>
          Password
          <Input placeholder="Write admin password" />
        </InputLable>
        <InputLable>
          Branch
          <Dropdown
            overlay={optionData}
            placeholder="choose admin branch location"
          >
            <Button style={{ borderRadius: "7px", float: "right" }}>
              <DownOutlined />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          Role
          <Dropdown overlay={optionData}>
            <Button
              style={{ borderRadius: "7px", float: "right" }}
              placeholder="choose admin branch Role"
            >
              <DownOutlined />
            </Button>
          </Dropdown>
        </InputLable>
        {/* <div style={{ float: "right" }}>
          {" "}
          <CustomModleButton Main>Create</CustomModleButton>
        </div> */}
      </SideModal>
    </SideOverlay>
  );
}

export default Index;
