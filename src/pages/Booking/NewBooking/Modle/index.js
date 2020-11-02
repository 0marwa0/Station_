import React from "react";
import { DatePicker, Input, InputNumber } from "antd";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Draggable from "react-draggable";
import { ReactComponent as DropIcon } from "../../../../public/images/dropdown.svg";
import Slider from "react-slick";
import { FaTrashAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CustomInput, CustomInputArea } from "../../../shared/SharedStyle";
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
  width: 200px;
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
  cursor: grab;
  margin-bottom: 10px;
  width: 900px;
`;
const PageWrapper = styled.div`
  width: 580px;

  margin-bottom: 18px;
  padding: 0px 40px;
`;
const Page1Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 14px;
`;
const BookedItem = styled.div`
  display: grid;
  padding: 5px 0;
  grid-template-columns: 0.5fr 0.3fr 0.3fr 0.2fr;
  border-bottom: ${(props) =>
    props.head ? "1px solid var(--lighterGray)" : "none"};
  grid-template-columns: 0.6fr 0.3fr 0.3fr 0.1fr;
`;
const SecondPageInput = styled.div`
  display: grid;

  align-itmes: center;

  gap: 15px;
  grid-template-columns: 1.2fr 0.1fr 0.1fr auto;
`;
const GrayText = styled.div`
  color: var(--lighterGray);
`;
const Size = styled.span`
  display: flex;
  justify-content: space-between;
`;
const GrayBoldText = styled.div`
  color: var(--textGray);
`;
export function FirstPage() {
  return (
    <div className="modleWrapper ">
      <Page1Item>
        <InputLable>
          Booking Title
          <CustomInput placeholder="write booking title" />
        </InputLable>
        <InputLable>
          Space
          <Dropdown overlay={optionData}>
            <Button
              style={{
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                color: "var(--textGray)",
                justifyContent: "space-between",
              }}
            >
              Choose space
              <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
      </Page1Item>
      <Page1Item>
        <InputLable>
          Organizer Name
          <CustomInput placeholder="write organizer name" />
        </InputLable>{" "}
        <InputLable>
          <Size>
            No. of People
            <span style={{ color: "var(--textGray)" }}>Max 3D</span>{" "}
          </Size>
          <InputNumber style={{ borderRadius: "7px", width: "100%" }} />
        </InputLable>
      </Page1Item>
      <InputLable>
        Comment
        <CustomInputArea
          rows={4}
          placeholder="write something about booking ..."
        />
      </InputLable>
    </div>
  );
}

export function SecondPage() {
  return (
    <div className="modleWrapper">
      <SecondPageInput>
        <InputLable>
          Choose Date
          <DatePicker adaddonAfter="IQD" />
        </InputLable>
        <InputLable>
          Start
          <Dropdown overlay={optionData}>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--textGray)",
                justifyContent: "space-between",
              }}
            >
              00:00Am
              <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          End
          <Dropdown overlay={optionData}>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--textGray)",
                justifyContent: "space-between",
              }}
            >
              00:00Am <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          <Button
            style={{
              borderRadius: "7px",
              marginTop: "80%",
              backgroundColor: "var(--lightGray)",
            }}
          >
            <GrayBoldText> +</GrayBoldText>
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
          <GrayBoldText>09:00 Am</GrayBoldText>
          <GrayBoldText>06:00 Am</GrayBoldText>
          <FaTrashAlt color="var(--lighterGray)" />
        </BookedItem>
        <BookedItem>
          <div>15 Oct 2020</div>
          <GrayBoldText>09:00 Am</GrayBoldText>
          <GrayBoldText>06:00 Am</GrayBoldText>
          <FaTrashAlt color="var(--lighterGray)" />
        </BookedItem>
      </div>
    </div>
  );
}
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
    },
  ],
};

export function ThirdPage() {
  return (
    <div className="modleWrapper">
      <InputLable>
        Coffe Brake Pack
        <Slider {...settings}>
          <div>
            <CardWrapper>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
            </CardWrapper>
          </div>
          <div></div>
          <div></div>
        </Slider>
      </InputLable>
      <InputLable>
        Lunches
        <Slider {...settings}>
          <div>
            <CardWrapper>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
            </CardWrapper>
          </div>
          <div></div>
          <div></div>
        </Slider>
      </InputLable>
      <InputLable>
        Hall Design{" "}
        <Slider {...settings}>
          <div>
            <CardWrapper>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
              <CardItem>
                <div>5,000 IQD</div>
                <GrayText>Water coffe 3 cupcakes,Tea with cookies</GrayText>
              </CardItem>
            </CardWrapper>
          </div>
          <div></div>
          <div></div>
        </Slider>
      </InputLable>
    </div>
  );
}

export function ForthPage() {
  return (
    <div className="modleWrapper ">
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        <InputLable>
          Total Price
          <Input addonAfter="IQD" placeholder="0.0" />
        </InputLable>
        <InputLable>
          Received
          <Input addonAfter="IQD" placeholder="0.0" />
        </InputLable>
      </div>
    </div>
  );
}
function Index() {
  return <div></div>;
}

export default Index;
