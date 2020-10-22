import React from "react";
import { DatePicker, Input, InputNumber } from "antd";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
const { TextArea } = Input;

const optionData = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);
const FirstPageWrapper = styled.div``;
const Page1Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  justify-content: center;

  font-size: 14px;
`;
const BookedItem = styled.div`
  display: grid;

  grid-template-columns: 0.5fr 0.3fr 0.3fr 0.2fr;
  border-bottom: ${(props) =>
    props.head ? "1px solid var(--lighterGray)" : "none"};
  grid-template-columns: 0.6fr 0.3fr 0.3fr 0.1fr;
`;
const SecondPageInput = styled.div`
  display: grid;
  justify-content: center;
  align-itmes: center;

  grid-template-columns: 0.5fr 0.3fr 0.3fr auto;
`;
const InputLable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 6px;
`;
export function FirstPage() {
  return (
    <FirstPageWrapper>
      <Page1Item>
        <InputLable>
          Booking Title
          <Input placeholder="write booking title" />
        </InputLable>
        <InputLable>
          Space
          <Dropdown overlay={optionData}>
            <Button style={{ width: "130px", borderRadius: "7px" }}>
              Choose space <DownOutlined />
            </Button>
          </Dropdown>
        </InputLable>
      </Page1Item>
      <Page1Item>
        <InputLable>
          Organizer Name
          <Input placeholder="write organizer name" />
        </InputLable>{" "}
        <InputLable>
          No. of People Max 3D{" "}
          <InputNumber style={{ width: "130px", borderRadius: "7px" }} />
        </InputLable>
      </Page1Item>
      <InputLable>
        Comment
        <TextArea placeholder="write something about booking ..." />
      </InputLable>
    </FirstPageWrapper>
  );
}

export function SecondPage() {
  return (
    <FirstPageWrapper>
      <SecondPageInput>
        <InputLable>
          Choose Date
          <DatePicker />
        </InputLable>
        <InputLable>
          Start
          <Dropdown overlay={optionData}>
            <Button>
              00:00Am <DownOutlined />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          End
          <Dropdown overlay={optionData}>
            <Button>
              00:00Am <DownOutlined />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          <Button
            style={{
              borderRadius: "7px",
              marginTop: "70%",
              backgroundColor: "var(--lighterGray)",
            }}
          >
            +
          </Button>
        </InputLable>
      </SecondPageInput>
      <div style={{ marginTop: "30px", marginBottom: "70px" }}>
        <BookedItem head>
          <div>Dates</div>
          <div>Start</div>
          <div>End</div>
        </BookedItem>
        <BookedItem>
          <div>13 Oct 2020</div>
          <div>09:00 Am</div>
          <div>06:00 Am</div>
        </BookedItem>
        <BookedItem>
          <div>15 Oct 2020</div>
          <div>09:00 Am</div>
          <div>06:00 Am</div>
        </BookedItem>
      </div>
    </FirstPageWrapper>
  );
}
function Index() {
  return <div></div>;
}

export default Index;
