import React from "react";
import { Input, InputNumber } from "antd";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { InputLable, ModleFooter, ModleHeader } from "../../shared/SharedStyle";
import styled from "styled-components";
import { GiNorthStarShuriken } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { CustomModleButton } from "../../shared/SharedComponents";
import { CustomInput, CustomInputArea } from "../../shared/SharedStyle";

const { TextArea } = Input;

const optionData = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);

const PageWrapper = styled.div`
  width: 400px;
  padding: 40px;
`;

function Index(props) {
  return (
    <div>
      {" "}
      <ModleHeader>
        Send notification
        <AiOutlineClose onClick={props.Close} />
      </ModleHeader>
      <PageWrapper>
        <InputLable>
          <span>
            Title <GiNorthStarShuriken color="red" size={8} />
          </span>
          <CustomInput placeholder="write notification title" />
        </InputLable>
        <InputLable>
          <span>
            {" "}
            Message <GiNorthStarShuriken color="red" size={8} />
          </span>

          <CustomInputArea
            rows={4}
            placeholder="write notification message ..."
          />
        </InputLable>{" "}
        <InputLable>
          User filter
          <Dropdown overlay={optionData}>
            <Button style={{ borderRadius: "7px" }}>
              All users{" "}
              <DownOutlined style={{ float: "right", marginTop: "6px" }} />
            </Button>
          </Dropdown>
        </InputLable>
      </PageWrapper>{" "}
      <ModleFooter>
        <CustomModleButton>cancel</CustomModleButton>
        <CustomModleButton Main>Send</CustomModleButton>
      </ModleFooter>
    </div>
  );
}

export default Index;
