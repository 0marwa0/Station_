import React from "react";
import { DatePicker, Input, InputNumber } from "antd";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { InputLable } from "../../../shared/SharedStyle";
const { TextArea } = Input;

const optionData = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);

const CardItem = styled.div`
  width: 180px;
  height: 100px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  courser: pointer;
  gap: 5px;
  border: 1px solid var(--lighterGray);
  &:hover {
    border: 1px solid var(--yellow);
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const PageWrapper = styled.div`
  width: 520px;
  margin-bottom: 18px;
  padding: 10px 40px;
`;
const Page1Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  justify-content: center;
  gap: 15px;
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

  align-itmes: center;

  gap: 15px;
  grid-template-columns: 1fr 0.1fr 0.1fr auto;
`;

export function FirstPage() {
  return (
    <PageWrapper>
      <Page1Item>
        <InputLable>
          Booking Title
          <Input placeholder="write booking title" />
        </InputLable>
        <InputLable>
          Space
          <Dropdown overlay={optionData}>
            <Button style={{ borderRadius: "7px" }}>
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
          <InputNumber style={{ borderRadius: "7px", width: "100%" }} />
        </InputLable>
      </Page1Item>
      <InputLable>
        Comment
        <TextArea placeholder="write something about booking ..." />
      </InputLable>
    </PageWrapper>
  );
}

export function SecondPage() {
  return (
    <PageWrapper>
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
              marginTop: "80%",
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
    </PageWrapper>
  );
}

export function ThirdPage() {
  return (
    <PageWrapper>
      <InputLable>
        Coffe Brake Pack
        <CardWrapper>
          <CardItem>Title</CardItem>
          <CardItem>Title</CardItem>
          <CardItem>Title</CardItem>
        </CardWrapper>
      </InputLable>
      <InputLable>
        Lunches
        <CardWrapper>
          <CardItem>Title</CardItem>
          <CardItem>Title</CardItem>
          <CardItem>Title</CardItem>
        </CardWrapper>
      </InputLable>
      <InputLable>
        Hall Design
        <CardWrapper>
          <CardItem>Title</CardItem>
          <CardItem>Title</CardItem>
          <CardItem>Title</CardItem>
        </CardWrapper>
      </InputLable>
    </PageWrapper>
  );
}

export function ForthPage() {
  return (
    <PageWrapper>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        <InputLable>
          Totle Price
          <Input />
        </InputLable>
        <InputLable>
          Received
          <Input />
        </InputLable>
      </div>
    </PageWrapper>
  );
}
function Index() {
  return <div></div>;
}

export default Index;
